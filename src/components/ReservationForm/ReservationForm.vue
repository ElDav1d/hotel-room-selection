<template>
  <header class="ReservationForm">
    <section class="ReservationForm_Overlay">
      <form class="ReservationForm_Container" action="">
        <input class="ReservationForm_Input" type="date" placeholder="Enter" />
        <input class="ReservationForm_Input" type="date" placeholder="Leave" />
        <input
          class="ReservationForm_Input"
          type="number"
          placeholder="Adults"
        />
        <input
          class="ReservationForm_Input"
          type="number"
          placeholder="Children"
        />
        <input class="ReservationForm_Submit" type="submit" value="Modify" />
      </form>
    </section>
  </header>
</template>

<style lang="scss">
@import "reservation-form.scss";
</style>
