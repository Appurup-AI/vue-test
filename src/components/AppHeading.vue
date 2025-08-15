<script setup lang="ts">
import { useAccountStore } from '../stores/account'
const accountStore = useAccountStore()

const handleNewAccount = () => {
  accountStore.accounts.push({
    id: accountStore.accounts.length + 1,
    marks: [],
    type: '',
    login: '',
    password: null,
    err: {
      marks: false,
      type: false,
      login: false,
      password: false,
    },
  })
}
</script>

<template>
  <div class="heading">
    <h1 class="heading__title">Учетные записи</h1>
    <AppButton icon="pi pi-plus" class="heading__icon" @click="handleNewAccount" />
  </div>
</template>
<style scoped lang="scss">
.heading {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  &__title {
  }
  &__icon {
    width: 4rem;
    height: 4rem;
    color: #fff;
  }
}
</style>
