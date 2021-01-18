<template>
  <ul class="RoomsList">
    <room-item
      v-for="room in storedRooms"
      :key="room.key"
      :room="room"
      @itemSelected="resetSelected"
    />
  </ul>
</template>

<script>
import RoomItem from "./RoomItem/RoomItem.vue";

export default {
  name: "rooms-list",
  components: { RoomItem },
  methods: {
    resetSelected(id) {
      const newRooms = this.storedRooms.map(room => {
        room.isSelected = room.id === id;
        ++room.key;
        return room;
      });

      this.$store.commit("saveRooms", newRooms);
    },
  },
  computed: {
    storedRooms() {
      return this.$store.getters.getStoredRooms;
    },
  },
};
</script>

<style lang="scss">
@import "./rooms-list.scss";
</style>
