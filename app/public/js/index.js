const indexModule = (() => {
  const path = window.location.pathname

  switch (path) {
    case '/' :
      //検索ボタンをクリックしたときのイベントリスナー
      document.getElementById('search-btn').addEventListener('click', () => {
        return searchModule.searchUsers()
      })
    
      //Usersモジュール
      return usersModule.fetchAllUsers()

    case '/create.html':
      document.getElementById('save-btn').addEventListener('click', () => {
        return usersModule.createUser()
      }) 

      document.getElementById('cancel-btn').addEventListener('click', () => {
        return window.location.href = '/'
      })
    break;

    case '/edit.html':
      const uid = window.location.search.split('?uid=')[1]

      document.getElementById('save-btn').addEventListener('click', () => {
        return usersModule.saveUser(uid)
      }) 

      document.getElementById('cancel-btn').addEventListener('click', () => {
        return window.location.href = '/'
      })

      document.getElementById('delete-btn').addEventListener('click', () => {
        return usersModule.deleteUser(uid)
      }) 
    
      return usersModule.setExistingValue(uid)

    default: 
      break;
  }


})()