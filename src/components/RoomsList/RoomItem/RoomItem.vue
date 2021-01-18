<template>
  <li
    :class="isSelected ? 'RoomItem-selected' : 'RoomItem'"
    @click="selectItemHandler"
  >
    <img class="RoomItem_Pic" :src="room.pic" :alt="room.name" />
    <div class="RoomItem_Data">
      <div class="RoomItem_DataHeader">
        <h3>{{ room.name }}</h3>
        <p>{{ room.description }}</p>
      </div>
      <p>Size: {{ room.size }}m2</p>
      <div class="RoomItem_DataFooter">
        <div class="RoomItem_DataFooterInfo">
          <span>
            <p>Beds: {{ room.beds }}</p>
          </span>
          <span>
            <p>People: {{ room.people }}</p>
          </span>
        </div>
        <h3>€{{ roomPricing }}</h3>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "room-item",
  data() {
    return {
      name: this.$props.room.name,
      pricing: this.$props.room.pricing,
      isSelected: this.$props.room.isSelected,
    };
  },
  props: {
    room: {
      type: Object,
      default: () => {
        return { message: "Not available" };
      },
      required: true,
    },
  },
  methods: {
    getRoomData() {
      const finalPricing = this.$route.query.promo_code
        ? this.applyPromo(this.getPromo())
        : this.$props.room.pricing;
      return {
        isSelected: this.$props.room.isSelected,
        name: this.$props.room.name,
        pricing: finalPricing,
      };
    },

    saveRoomData(room) {
      this.$store.commit("saveRoomData", room);
    },

    resetPromo() {
      this.$store.commit("savePromo", 1);
    },

    selectItemHandler() {
      if (!this.isSelected) {
        this.$emit("itemSelected", this.$props.room.id);
        this.saveRoomData(this.getRoomData());
      }
    },

    getPromo() {
      return this.$store.getters.getPromo;
    },

    applyPromo(promo) {
      return (
        this.$props.room.pricing - (this.$props.room.pricing * promo) / 100
      );
    },
  },
  computed: {
    roomPricing() {
      return this.getRoomData().pricing;
    },
  },
  created() {
    if (!this.$route.query.promo_code) {
      this.resetPromo();
    }
  },
};
</script>

<style lang="scss">
@import "./room-item.scss";
</style>
