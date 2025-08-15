import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore(
  'account',
  () => {
    interface IAccountError {
      marks?: boolean
      type?: boolean
      login?: boolean
      password?: boolean
    }

    interface IAccount {
      id?: number
      marks: string[]
      type: string
      login: string
      password: string | null
      err: IAccountError
    }

    const accounts = ref<IAccount[]>([])

    const handleDeleteAccount = (id: number | undefined) => {
      if (id === undefined) return

      accounts.value.splice(
        accounts.value.indexOf(accounts.value.findIndex((el) => el.id === id)),
        1,
      )
    }

    const handleTypeAccountChange = (index: number) => {
      if (accounts.value[index].type === 'Local') accounts.value[index].password = null
    }

    const handleValidate = (index: number) => {
      accounts.value[index].err = {}
      const account = accounts.value[index]
      if (account.marks.length > 50) {
        accounts.value[index].err.marks = true
      }
      if (account.type !== 'Local' && account.type !== 'LDAP') {
        accounts.value[index].err.type = true
      }
      if (account.login === '' || account.login.length > 100) {
        accounts.value[index].err.login = true
      }
      if (
        account.type === 'Local' &&
        (account.password === '' || (account.password?.length ?? 0) > 100)
      ) {
        accounts.value[index].err.password = true
      }
    }

    return { accounts, handleDeleteAccount, handleTypeAccountChange, handleValidate }
  },
  { persist: true },
)
