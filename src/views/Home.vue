<template>
  <div>
    <h1>LAYOUT</h1>
    <header>
      <h2>HEADER</h2>
      <div>
        Form
      </div>
    </header>
    <main>
      <h2>MAIN</h2>
      <section>
        <div>Prog bar</div>
        <ul>
          Items List
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
        </ul>
      </section>
      <aside>
        Summary
      </aside>
    </main>
    <footer>
      <h2>
        FOOTER
      </h2>
      <div>Secondary nav</div>
      <div>Contact and social</div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
};
</script>
