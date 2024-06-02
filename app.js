// Initialize the Ace editor
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.commands.addCommand({
    name: 'run',
    bindKey: {win: 'Ctrl-Enter',  mac: 'Command-Enter'},
    exec: run,
    readOnly: true, 
});
editor.getSession().setUseWorker(false);
editor.container.style.lineHeight = 1002;
editor.renderer.updateFontSize();
editor.insert(localStorage.getItem("code") ?? "");
const output = document.getElementById("output");

let solution = false; // solution to the current codelab
let codeHTML = false;
let codelabs = [];

// Codelab functionality
(
    async () => {
        let selector = document.getElementById("codelab");
        const response = await fetch("./labs/labs.json");
        codelabs = await response.json();
        codelabs.forEach((chapter, i) => {
            // Chapter title
            const chapterOption = document.createElement("optgroup");
            chapterOption.label = `${chapter.chapter}`;
            selector.appendChild(chapterOption);

            chapter.codelabs.forEach((lab, j) => {
                // Codelab
                const option = document.createElement("option");
                option.textContent = lab.title;
                option.value = `${i},${j}`;
                chapterOption.appendChild(option);
            });
        });
        selector.addEventListener("change", async (event) => {
            let value = selector.value;
            document.querySelector("#reload").disabled = !value;
            document.querySelector("#solve").disabled = !value;
            if (value) {
                const [i, j] = value.split(",");
                const codelab = codelabs[parseInt(i)].codelabs[parseInt(j)];
                // Get a markdown file and convet it
                const response = await fetch(`./labs/${codelab.file}.md`);
                const md = await response.text();
                const converter = new showdown.Converter();
                const html  = converter.makeHtml(md);

                // Parse the HTML string
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                // Extract the <code> element with JS Code
                const codeElement = doc.querySelector('pre code.js');
                codeHTML = codeElement?.textContent;

                // Extract the <code> element with JS Code as solution
                const codeSolution = doc.querySelector('pre code.solution');
                solution = codeSolution ? codeSolution.textContent : false;

                // Remove the <code> element from the document
                codeElement?.remove();
                codeSolution?.remove();
                document.querySelector("#solve").disabled = !codeSolution;

                // Get the remaining HTML
                let remainingHTML = doc.body.innerHTML; 
                if (codelab.fromVersion) {
                    remainingHTML = `<span class='badge'>${codelab.fromVersion}+</span>
                                     ${remainingHTML}`;
                }

                document.getElementById("description").innerHTML = remainingHTML;
                editor.setValue("");
                editor.setValue(codeHTML, -1);

                output.textContent = "";
            } else {
                document.getElementById("description").innerHTML = "";                
            }
        })
    }  
)()

// Buttons functionality
document.getElementById("clear").addEventListener("click", () => {
    editor.setValue("");
    output.textContent = "";
});

document.getElementById("reload").addEventListener("click", () => {
    if (confirm("If you confirm, it will replace your current code. Ok?")) {
        editor.setValue(codeHTML);
    }
});

document.getElementById("next").addEventListener("click", () => {
    let select = document.getElementById("codelab");
    if (select.selectedIndex < select.options.length - 1) {
        select.selectedIndex++;
    }
    select.dispatchEvent(new Event('change')); 
});

document.getElementById("solve").addEventListener("click", () => {
    if (solution) {
        if (confirm("If you confirm, it will replace your current code. Ok?")) {
            editor.setValue(solution);
        }
    } else {
        alert("There is no solution available for this codelab")
    }
});

document.getElementById("run").addEventListener("click", run);

function run() {
    const code = editor.getValue();
    localStorage.setItem("code", code);

    // Clear previous output
    output.textContent = '';

    // Store the original console.log function
    const originalConsoleLog = console.log;

    // Redirect console.log to the output area
    console.log = function(...args) {
        const logLine = document.createElement("div");
        logLine.textContent = args.join(' ');
        output.appendChild(logLine);
        originalConsoleLog.apply(console, args); // Call the original console.log
    };

    try {
        // Execute the code
        new Function(code)();
    } catch (e) {
        const errorLine = document.createElement("div");
        errorLine.textContent = e.message;
        errorLine.classList.add("error");
        output.appendChild(errorLine);
    }

    // Restore the original console.log function
    console.log = originalConsoleLog;
}
