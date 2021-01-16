<template>
  <div>
    <reservation-form />
    <main>
      <article>
        <progress-bar :title="title" />
        <rooms-list />
      </article>
      <reservation-summary />
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
import RoomsList from "../components/RoomsList/RoomsList.vue";
import ReservationSummary from "../components/ReservationSummary/ReservationSummary.vue";

export default {
  name: "Home",
  components: {
    ReservationForm,
    ProgressBar,
    RoomsList,
    ReservationSummary,
  },
  data() {
    return {
      title: "Rooms & Rates",
    };
  },
};
</script>
