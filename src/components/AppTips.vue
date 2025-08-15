<template>
  <div class="tips">
    <i class="pi pi-question-circle tips__icon"></i>
    <p class="tips__text">
      Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
    </p>
  </div>
</template>
<style scoped lang="scss">
.tips {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 1rem;
  border-radius: 1rem;
  background-color: #3a3a3a;
  gap: 1rem;
  &__icon {
    font-size: 2.5rem;
  }
  &__text {
    font-size: 1.4rem;
  }
}
</style>
