<script setup lang="ts">
import { uploadFile } from '@/stores/uploader';

</script>

<template>
    <div class="image-uploader">
        <h1>Image Uploader</h1>
        <div class="image-uploader__container">
        <div class="image-uploader__container__image">
            <img alt="image" />
        </div>
        <div class="image-uploader__container__input">
            <input type="file" :on-change="uploadFile()"/>
            <button>Upload</button>
        </div>
        </div>
    </div>
</template>