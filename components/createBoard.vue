<template>
<transition name="fade">
<div class="modal" v-if="show">
    <div class="modal-content">
      <div class="flex justify-between p-3">
       <span class="font-medium">Add Board</span>
       <span @click="$emit('hideModal')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
       </span>
      </div>
      <div>
        <form @submit="createBoard" class="p-3">
          <div>
             <label for="first-name" class="block text-sm font-medium text-gray-700">Board Title</label>
                  <input 
                  v-model="board.title"
                  type="text" autocomplete="given-name" 
                  class="focus:outline-none w-full rounded mt-2" />
          </div>
            <div class="mt-2">
                <label class="block text-sm font-medium text-gray-700">
                  Cover photo
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div v-if="board.image.name == ''" class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload"
                        @change="selectedFile($event)" 
                        name="file-upload" type="file" 
                        class="sr-only" />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                  <div 
                  class="imageContainer"
                  v-else
                  >
                      <img :src="board.image.downloadUrl" alt="" >
                  </div>
                </div>
              </div>
              <div class="mt-3">
              <button type="submit" class="group mt-3 relative w-full flex justify-center py-2 px-4 border 
              border-transparent text-sm font-medium rounded-md
               text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
               focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Add Board
          </button>
              </div>
        </form>
      </div>
    </div>
  </div>
</transition>
  
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
    props: {
        show : {
            type : Boolean,
            default : false
        },
    },
    data(){
      return {
          board : {
            title : '',
            image : {
              name : '',
              downloadUrl : '',
              id : ''
            }
          },
          uploadedFile : {}
      }
    },
    methods : {
      createBoard(e){
         e.preventDefault();
         this.board['createdDate'] = Date.now();
         this.$fire.firestore.collection('users').doc(this.$fire.auth.currentUser.uid).collection('boards').doc(this.uploadedFile.id).set(this.board)
         
         
      },
      selectedFile(e){
        try {
          let file = e.target.files[0]
          this.uploadedFile = {
            file,
            id : uuidv4()
          }
          this.uploadedImage()
        } catch (error) {
            console.log(error)
        }
      },
       uploadedImage(){
          const fileName = 'images' + '/' +  this.uploadedFile.id + '-' + this.uploadedFile.file.name;
          const ref = this.$fire.storage.ref()
          const itemMeta = {
            customMetaData : {
              owner : this.$fire.auth.currentUser.uid,
            }
          }

          const task =   ref.child(fileName).put(this.uploadedFile.file, itemMeta);
          task
          .then(snapshot => snapshot.ref.getDownloadURL())
          .then(url => {
              this.board.image = {
              name : fileName,
              downloadUrl : url,
              id : this.uploadedFile.id
              }
          })
      }
    }
};
</script>
<style  scoped>   

.fade-enter-active {
  animation: zoom-in .4s ease-in;
}
.fade-leave-active {
  animation : zoom-in .4s reverse ease-out; 
}

@keyframes zoom-in {
  0% {
    transform:scale(0);
  }
  100% {
    transform:scale(1);
  }
}
.modal{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0%;
    right: 0%;
    z-index: 1;   
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content{
    background-color: white;
    color: black;
    width: 30%;
    margin: auto;
    box-sizing: border-box;
    border-radius: 10px;
}

img {
  max-height: 200px;
}

</style>>

</style>
