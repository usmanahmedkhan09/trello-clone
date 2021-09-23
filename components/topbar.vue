<template>
  <div>
    <div
      class="flex justify-between p-1 px-4 topbar-color text-white cursor-pointer"
    >
      <div class="flex">
        <div
          class="flex h-10 icon-color items-center justify-center rounded w-10 mr-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
        <div
          class="flex h-10 icon-color items-center justify-center rounded px-3 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <span>Boards</span>
        </div>
      </div>
      <div class="flex  items-center justify-center rounded">
        <img class="w-10" src="~/images/board.png" alt="" />
        <span class="my-1.5 font-medium">Trello</span>
      </div>
      <div class="flex">
        <div
          @click="openModal()"
          class="flex h-10 icon-color items-center justify-center rounded px-3 font-medium mr-1"
        >
          <span>Create</span>
        </div>
        <div
          class="bg-gray-100 flex items-center justify-center rounded-full w-10 h-10"
        >
          <span class="font-medium text-black">UA</span>
        </div>
      </div>
      <CreateBoard :show="showBoard" @hideModal="closeModal()" />
    </div>
  </div>
</template>
<script>
import CreateBoard from "./createBoard.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      showBoard: false,
      currentImageId: ""
    };
  },
  component: {
    CreateBoard
  },
  methods: {
    closeModal() {
      this.showBoard = false;
    },
    openModal() {
      this.currentImageId = uuidv4();
      this.showBoard = true;
    }
  }
};
</script>
<style>
.topbar-color {
  background-color: #346ba7;
}
.icon-color {
  background-color: #67a6ca;
}
</style>
