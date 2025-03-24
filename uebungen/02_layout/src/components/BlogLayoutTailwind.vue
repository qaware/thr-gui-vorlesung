<template>
  <div class="grid max-w-screen-xl mx-auto gap-5 p-5
              grid-cols-1 md:grid-cols-3">
    <!-- Header -->
    <header class="md:col-span-3 flex justify-between items-center bg-blue-600 text-white p-4 rounded-md">
      <div class="text-xl font-bold">My Blog</div>
      <nav class="flex gap-4 flex-col md:flex-row">
        <a href="#" class="hover:underline">Home</a>
        <a href="#" class="hover:underline">Articles</a>
        <a href="#" class="hover:underline">About</a>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="md:col-span-2 grid gap-4">
      <div class="flex justify-between bg-white p-4 rounded-md shadow">
        <div>
          <h2 class="text-lg font-bold">Vue Basics</h2>
          <p>Learn the basics of Vue 3.</p>
        </div>
        <p>12.03.2025</p>
      </div>

      <div class="flex justify-between bg-white p-4 rounded-md shadow">
        <div>
          <h2 class="text-lg font-bold">CSS Layouts</h2>
          <p>Grid vs Flexbox - which one to use?</p>
        </div>
        <p>25.01.2025</p>
      </div>

      <div class="flex justify-between bg-white p-4 rounded-md shadow">
        <div>
          <h2 class="text-lg font-bold">Responsive Design</h2>
          <p>Best practices for mobile-friendly sites.</p>
        </div>
        <p>05.12.2024</p>
      </div>
    </main>

    <!-- Sidebar -->
    <aside class="bg-gray-900 text-white p-4 rounded-md flex flex-col gap-6">
      <div>
        <h2 class="text-lg font-bold">Categories</h2>
        <p>Vue.js</p>
        <p>CSS</p>
        <p>JavaScript</p>
      </div>
      <div>
        <h2 class="text-lg font-bold">About Me</h2>
        <p>Hello! I'm a blogger sharing my thoughts on web development.</p>
      </div>
    </aside>

    <!-- Footer -->
    <footer class="md:col-span-3 text-center bg-gray-800 text-white p-4 rounded-md">
      <p>&copy; 2024 My Blog</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
