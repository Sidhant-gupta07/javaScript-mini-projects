const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
addBtn.addEventListener(
    "click",
    function(){
        addnote()
    }
)

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data= [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    // console.log(data);
    if(data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}



/* <div class="note">
<div class="tool">
    <h3>Notes</h3>
    <i class="fa-solid fa-file-arrow-down"></i>
    <i class="fa-regular fa-trash-can"></i>
</div>
<textarea></textarea> 
</div> */
const addnote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <h3>Notes</h3>
        <i class="save fa-solid fa-file-arrow-down"></i>
        <i class="trash fa-regular fa-trash-can"></i>
    </div>
    <textarea>${text}</textarea>  
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove();
            saveNotes();
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes()
        }
    )
main.appendChild(note);
saveNotes();
}

// Self-Calling Functions
(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if(lsNotes === null) {
            addnote()
        } else {
            lsNotes.forEach(
                (lsNotes) => {
                    addnote(lsNote)
                }
            )
        }
        
    }
) ()
