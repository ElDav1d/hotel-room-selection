<template>
  <aside class="ReservationSummary">
    <div class="ReservationSummary_Pic">
      <img src="../../assets/images/los-cocos-img-bg.png" alt="" />
    </div>
    <section>
      <h2 class="ReservationSummary_Header">Reservation Summary</h2>
      <div class="ReservationSummary_Main">
        <h3 class="ReservationSummary_MainHeading">Mini Dreamy Room</h3>
        <div class="ReservationSummary_MainInfoBlock-check-info">
          <span>
            <p>
              <strong>Check in</strong>
            </p>
            <p>From 15:00h</p>
          </span>
          <span>
            <p><strong>Check out</strong></p>
            <p>Before 12:00h</p>
          </span>
          <span></span>
        </div>
        <div class="ReservationSummary_MainInfoBlock">
          <p><strong>Reservation date</strong></p>
          <p>
            <span>From</span>
            <span>To</span>
          </p>
        </div>
        <div class="ReservationSummary_MainInfoBlock">
          <p><strong>People</strong></p>
          <p>
            Adults
          </p>
        </div>
      </div>
      <div class="ReservationSummary_Footer">
        <h3 class="ReservationSummary_FooterPricing">
          <span>Total</span>
          <span>€</span>
        </h3>
        <button class="ReservationSummary_FooterCTA">Save</button>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  name: "reservation-summary",
};
</script>

<style lang="scss">
@import "./reservation-summary.scss";
</style>
