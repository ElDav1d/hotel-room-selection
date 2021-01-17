<template>
  <header class="ReservationForm">
    <section class="ReservationForm_Overlay">
      <form class="ReservationForm_Container">
        <div class="ReservationForm_InputWrapper">
          <label for="checkIn">{{ checkIn ? checkIn : checkInMin }}</label>
          <input
            id="checkIn"
            class="ReservationForm_Input"
            type="date"
            :min="checkInMin"
            v-model="checkIn"
            @change="changeCheckInHandler"
          />
        </div>
        <div class="ReservationForm_InputWrapper">
          <label for="checkIn">{{ checkOut ? checkOut : checkOutMin }}</label>
          <input
            id="checkIn"
            class="ReservationForm_Input"
            type="date"
            :min="checkOutMin"
            v-model="checkOut"
          />
        </div>
        <div class="ReservationForm_InputWrapper">
          <label for="adultsAmount">Adults: {{ adultsAmount }}</label>
          <input
            id="adultsAmount"
            class="ReservationForm_Input"
            type="number"
            min="0"
            v-model="adultsAmount"
          />
        </div>
        <div class="ReservationForm_InputWrapper">
          <label for="childrenAmount">Children: {{ childrenAmount }}</label>
          <input
            id="childrenAmount"
            class="ReservationForm_Input"
            type="number"
            min="0"
            v-model="childrenAmount"
          />
        </div>
        <input
          class="ReservationForm_Submit"
          type="submit"
          value="Modify"
          @click="submitReservationHandler"
        />
      </form>
      <pre>{{ $data }}</pre>
    </section>
  </header>
</template>
<script>
export default {
  data() {
    return {
      checkInMin: "",
      checkOutMin: "",
      checkIn: "",
      checkOut: "",
      adultsAmount: 1,
      childrenAmount: 0,
      daysAmount: 1,
    };
  },
  methods: {
    getDate() {
      const date = [
        new Date().getUTCFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
      ];
      return date;
    },

    getInputDate(dateInput) {
      const date = [
        new Date(dateInput).getUTCFullYear(),
        new Date(dateInput).getMonth(),
        new Date(dateInput).getDate(),
      ];
      return date;
    },

    formatDate(date, isTomorrow) {
      if (isTomorrow) {
        ++date[2];
      }

      ++date[1]; //FIX month value format

      const formatItem = item => {
        item = item.toString();
        if (item.length === 1) {
          return "0" + item;
        } else {
          return item;
        }
      };

      const formatedDate = date.map(item => formatItem(item)).join("-");

      return formatedDate;
    },

    setCheckInMin() {
      this.checkInMin = this.formatDate(this.getDate(), false);
      this.checkIn = this.checkInMin;
    },

    setCheckOutMin() {
      this.checkOutMin = this.formatDate(this.getDate(), true);
      this.checkOut = this.checkOutMin;
    },

    calcDays(dateIn, dateOut) {
      return Math.floor(
        (Date.UTC(
          dateOut.getFullYear(),
          dateOut.getMonth(),
          dateOut.getDate()
        ) -
          Date.UTC(dateIn.getFullYear(), dateIn.getMonth(), dateIn.getDate())) /
          (1000 * 60 * 60 * 24)
      );
    },

    changeCheckInHandler() {
      this.checkOutMin = this.formatDate(this.getInputDate(this.checkIn), true);
      const checkInDate = new Date(this.checkIn);
      const checkOutDate = new Date(this.checkOut);
      const checkInDays = this.calcDays(checkInDate, checkOutDate);
      if (checkInDays <= 0) {
        this.checkOut = this.checkOutMin;
      }
    },

    submitReservationHandler(event) {
      event.preventDefault();
      const checkInDate = new Date(this.checkIn);
      const checkOutDate = new Date(this.checkOut);
      this.daysAmount = this.calcDays(checkInDate, checkOutDate);
    },
  },

  created() {
    this.setCheckInMin();
    this.setCheckOutMin();
  },
};
</script>
<style lang="scss">
@import "reservation-form.scss";
</style>
