<template>
  <div style="max-width: 600px; margin: auto; font-family: sans-serif;">
    <h1>Neuen Blogeintrag erstellen</h1>

    <!-- Titel -->
    <label for="title">Titel:</label><br />
    <input id="title" type="text" @keydown="checkTitleInput" />
    <p id="title-error" style="color: red; font-size: 0.9em;"></p>

    <br /><br />

    <!-- Inhalt -->
    <label for="content">Inhalt:</label><br />
    <textarea
        id="content"
        @focus="showInfo"
        @blur="hideInfo"
        rows="4"
        cols="40"
    ></textarea>
    <p id="content-info" style="color: gray; font-size: 0.9em; display: none;">
      Hier kannst du den Blogtext schreiben…
    </p>

    <br /><br />

    <!-- Speichern -->
    <button @click="saveEntry">Speichern</button>
    <p id="save-msg" style="color: green; font-weight: bold;"></p>

  </div>
</template>

<script setup>
function checkTitleInput(event) {
  const forbidden = ['!', '@']
  const errorEl = document.getElementById('title-error')

  if (forbidden.includes(event.key)) {
    event.preventDefault()
    errorEl.textContent = `Zeichen ${event.key} ist im Titel nicht erlaubt`
    event.target.style.border = '2px solid red'
  } else {
    errorEl.textContent = ''
    event.target.style.border = ''
  }
}

function showInfo() {
  document.getElementById('content-info').style.display = 'block'
}

function hideInfo() {
  document.getElementById('content-info').style.display = 'none'
}

function saveEntry() {
  const msg = document.getElementById('save-msg')
  msg.textContent = 'Speichern...'
  setTimeout(() => {
    msg.textContent = 'Blogeintrag erfolgreich gespeichert!'
  }, 1000)
}
</script>
