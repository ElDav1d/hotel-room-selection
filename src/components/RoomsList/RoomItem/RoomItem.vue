<template>
  <li class="RoomItem">
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
        <h3>€{{ room.pricing }}</h3>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "room-item",
  props: {
    room: {
      type: Object,
      default: () => {
        return { message: "Not available" };
      },
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "./room-item.scss";
</style>
