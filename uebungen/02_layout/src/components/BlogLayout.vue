<template>
  <div class="container">
    <!-- Header -->
    <header class="header">
      <div class="logo">My Blog</div>
      <nav class="nav">
        <a href="#">Home</a>
        <a href="#">Articles</a>
        <a href="#">About</a>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="main">
      <div class="blog-card">
        <div>
          <h2>Vue Basics</h2>
          <p>Learn the basics of Vue 3.</p>
        </div>
        <p>12.03.2025</p>
      </div>

      <div class="blog-card">
        <div>
          <h2>CSS Layouts</h2>
          <p>Grid vs Flexbox - which one to use?</p>
        </div>
        <p>25.01.2025</p>
      </div>

      <div class="blog-card">
        <div>
          <h2>Responsive Design</h2>
          <p>Best practices for mobile-friendly sites.</p>
        </div>
        <p>05.12.2024</p>
      </div>
    </main>

    <!-- Sidebar -->
    <div class="sidebar">
      <div>
        <h2>Categories</h2>
        <p>Vue.js</p>
        <p>CSS</p>
        <p>JavaScript</p>
      </div>
      <div>
        <h2>About Me</h2>
        <p>Hello! I'm a blogger sharing my thoughts on web development.</p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 My Blog</p>
    </footer>
  </div>
</template>

<style scoped>

body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  color: #333;
}

/* Layout */
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "main sidebar"
    "footer footer";
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  max-width: 1200px;
  margin: auto;
  gap: 20px;
  padding: 20px;
}

/* Header */
.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0078D7;
  color: white;
  padding: 15px;
  border-radius: 8px;
}

h2 {
  font-size: larger;
  font-weight: bold;
}

.nav {
  display: flex;
  list-style: none;
  gap: 15px;
}

.nav a {
  color: white;
  text-decoration: none;
}

.nav a:hover {
  text-decoration: underline;
}

/* Main Content */
.main {
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.blog-card {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Sidebar */
.sidebar {
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #1e1e2f;
  color: white;
  padding: 15px;
  border-radius: 8px;
}

/* Footer */
.footer {
  grid-area: footer;
  text-align: center;
  background: #333;
  color: white;
  padding: 15px;
  border-radius: 8px;
}

/* Responsive Design */
@media (max-width: 700px) {
  .container {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
  }

  .nav {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
<script setup lang="ts">
</script>