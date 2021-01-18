import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedRoom: {
      isSelected: true,
      name: "Mini Dreamy Room",
      pricing: 200
    },
    storedRooms: [
      {
        id: 0,
        key: 0,
        isSelected: true,
        pic: require("../assets/images/room_1.png"),
        name: "Mini Dreamy Room",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        size: 20,
        beds: 1,
        people: 1,
        pricing: 200,
      },
      {
        id: 1,
        key: 1,
        isSelected: false,
        pic: require("../assets/images/room_2.png"),
        name: "Seet Bungalow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        size: 50,
        beds: 1,
        people: 2,
        pricing: 350,
      },
      {
        id: 2,
        key: 2,
        isSelected: false,
        pic: require("../assets/images/room_3.png"),
        name: "Los Cocos Suite",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        size: 125,
        beds: 3,
        people: 4,
        pricing: 450,
      },
    ],
    reservationDetails: {
      checkIn: "2021-01-17",
      checkOut: "2021-01-18",
      adults: 1,
      children: 0,
      days: 1,
    }
  },
  mutations: {
    saveRoomData: (state, room) => {
      state.selectedRoom = room;
    },
    saveRooms: (state, rooms) => {
      state.storedRooms = rooms;
    },
    saveReservationData: (state, reservationData) => {
      state.reservationDetails = reservationData;
    },
  },
  getters: {
    getSelectedRoom: state => {
      return state.selectedRoom;
    },
    getReservationDetails: state => {
      return state.reservationDetails;
    },
    getStoredRooms: state => {
      return state.storedRooms;
    },
  },
  plugins: [createPersistedState()],
});
