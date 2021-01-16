<template>
  <div>
    <reservation-form />
    <main>
      <article>
        <progress-bar :title="title" />
      </article>
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
import ReservationForm from "../components/ReservationForm/ReservationForm.vue";
import ProgressBar from "../components/ProgressBar/ProgressBar.vue";

export default {
  name: "Home",
  components: {
    ReservationForm,
    ProgressBar,
  },
  data() {
    return {
      title: "Rooms & Rates",
    };
  },
};
</script>
