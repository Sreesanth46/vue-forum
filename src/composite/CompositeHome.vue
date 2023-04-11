<template>
    <h1>Welcome to the forum</h1>
    <CategoryList :categories="categories" />
</template>

<script setup>
import CategoryList from '@/components/CategoryList.vue'
import { useCategoriesStore } from '../stores/CategoriesStore';
import { storeToRefs } from 'pinia';
const { categories } = storeToRefs(useCategoriesStore())
</script>