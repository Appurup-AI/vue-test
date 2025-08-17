<script setup lang="ts">
import AppHeading from './components/AppHeading.vue'
import AppTips from './components/AppTips.vue'
import AppFormHeading from './components/AppFormHeading.vue'
import { useAccountStore } from './stores/account'

const accountStore = useAccountStore()
</script>

<template>
  <div class="container">
    <AppHeading />
    <AppTips />
    <AppFormHeading />
    <div class="form">
      <div v-for="(account, index) in accountStore.accounts" :key="account.id" class="row">
        <input
          class="row__marks row__el"
          type="text"
          placeholder="XXX"
          :value="accountStore.accounts[index].marks.map((el: any) => el.text).join(';')"
          @input="
            (event) => {
              accountStore.accounts[index].marks = []
              const newStr = event.target.value.split(';')
              newStr.map((el) => {
                accountStore.accounts[index].marks.push({ text: el })
              })
              console.log(accountStore.accounts[index].marks)
            }
          "
          maxlength="50"
          :class="{ row__error: accountStore.accounts[index].err.marks }"
          @blur="accountStore.handleValidate(index)"
        />

        <select
          class="row__type row__el"
          @change="accountStore.handleTypeAccountChange(index)"
          v-model="accountStore.accounts[index].type"
        >
          <option value="LDAP">LDAP</option>
          <option value="Local">Локальная</option>
        </select>

        <div class="row__data">
          <input
            class="row__data--login row__el"
            type="text"
            placeholder="Значениe"
            v-model="accountStore.accounts[index].login"
            maxlength="100"
            :class="{ row__error: accountStore.accounts[index].err.login }"
            @blur="accountStore.handleValidate(index)"
            required
          />
          <AppPassword
            class="row__data--password row__el"
            v-if="accountStore.accounts[index].type === 'Local'"
            v-model="accountStore.accounts[index].password"
            maxlength="100"
            :feedback="false"
            :class="{ row__error: accountStore.accounts[index].err.password }"
            @blur="accountStore.handleValidate(index)"
            toggleMask
          />
        </div>

        <i
          class="pi pi-trash row__button"
          style="font-size: 2rem; color: #fff"
          @click="accountStore.handleDeleteAccount(index)"
        >
        </i>
      </div>
      <div v-if="accountStore.accounts.length === 0">
        <p>Нет аккаунтов</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  margin: 0 auto;
  max-width: 114rem;
  height: 90vh;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 8rem;
  gap: 1rem;
  width: 100%;
  border-radius: 1rem;
  align-items: center;
  margin-top: 1rem;
  &__el {
    border: 1px solid #52525b;
    border-radius: 0.6rem;
    background-color: #000;
    padding: 0.5rem;
    min-height: 3.7rem;
    &:focus {
      outline: none;
      border: 1px solid #4ade80;
    }
  }

  &__error {
    outline: 1px solid red !important;
  }

  &__data {
    display: flex;
    gap: 1rem;
    &--login {
      flex: 1;
    }
    &--password {
      flex: 0 0 35%;
    }
  }

  &__button {
    cursor: pointer;
  }
}
</style>
