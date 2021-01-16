<template>
  <ul class="RoomsList">
    <room-item v-for="(room, index) in rooms" :key="index" :room="room" />
  </ul>
</template>

<script>
import RoomItem from "./RoomItem/RoomItem.vue";

export default {
  name: "rooms-list",
  components: { RoomItem },
  data() {
    return {
      rooms: [
        {
          pic: require("../../assets/images/room_1.png"),
          name: "Mini Dreamy Room",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          size: 20,
          beds: 1,
          people: 1,
          pricing: 200,
        },
        {
          pic: require("../../assets/images/room_2.png"),
          name: "Seet Bungalow",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          size: 50,
          beds: 1,
          people: 2,
          pricing: 350,
        },
        {
          pic: require("../../assets/images/room_3.png"),
          name: "Los Cocos Suite",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          size: 125,
          beds: 3,
          people: 4,
          pricing: 450,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./rooms-list.scss";
</style>
