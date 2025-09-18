console.log('hey');

function IconButton(btnText, btnColor, iconClass) {
  const button = document.createElement('button');
  button.classList.add('btn');
  button.classList.add('btn-' + btnColor);
  const i = document.createElement('i');
  i.className = iconClass;
  button.textContent = btnText;
  button.prepend(i);

  return button;
}

/*
  Adım 1: Aşağıdaki HTML button yapısını oluşturup geri dönecek `IconButton` isimli bir fonksiyon yazın.

  <button class="btn btn-{btnColor}">
    <i class="{iconClass}" />
    {btnText}
  </button>

  'IconButton' fonksiyonu 3 argüman alacak: 
  - btnText: butonun içindeki metin
  - btnColor: butonun arkplan rengi [ blue | orange | red ] değerlerini alabilir
  - iconClass: FontAwesome kütüphanesi icon class ismi 

Adım 2: Bu fonksiyonu kullanarak aşağıdaki butonları oluşturun: 

    1. { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" }
    2. { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" }
    3. { btnText: "Sil", btnColor: "red", iconClass: "fa fa-trash" }

Adım 3: Oluşturduğunuz buttonları div#icon-buttons içerisine ekleyin

*/

const buttonContainer = document.getElementById('icon-buttons');

const buttonAc = IconButton('Aç', 'blue', 'fa fa-folder-open');
buttonContainer.appendChild(buttonAc);

const buttonDuzenle = IconButton('Düzenle', 'orange', 'fa fa-pen');
buttonContainer.appendChild(buttonDuzenle);

const buttonSil = IconButton('Sil', 'red', 'fa fa-trash');
buttonContainer.appendChild(buttonSil);
