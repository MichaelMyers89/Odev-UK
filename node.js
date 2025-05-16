 // DOM'dan gerekli elemanları seçiyoruz
  const openBtn = document.querySelector('.modal-show');
  const modal = document.querySelector('.modal');

  // LOGIN butonuna tıklanınca modal'ı göster
  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

 