const indexModule = (() => {

  //検索ボタンをクリックしたときのイベントリスナー
  document.getElementById('search-btn').addEventListener('click', () => {
    return searchModule.searchUsers()
  })

  //Usersモジュール
  return usersModule.fetchAllUsers()

})()