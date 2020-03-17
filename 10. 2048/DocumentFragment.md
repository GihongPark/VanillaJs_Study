#DocumentFragment
DOM 객체는 연산을 수행할 때 마다 DOM tree에 접근해야 하기 때문에 성능 저하가 있음.
따라서 막대한 크기의 DOM 객체에 다수의 접근할 경우 성능 최적하를 위하여 `DocumentFragment`를 사용하여 성능 향상을 기대할 수 있음

`DocumentFragment`는 메모리상에 노드 구조를 생성하고 활성화된 활성화된 DOM 구조에 삽입함. 이는 활성화된 DOM tree가 아니기 때문에 변경사항이 생길시 문서에 영향을 주지않고 reflow(document 내 요소의 위치를 다시 계산하기 위한 웹브라우저 프로세스)를 일으키지 않음.

`DocumentFragment`는 DOM 서브트리를 조합해서 DOM에 삽입하는 용도로 사용됨.
`document.createDocumentFragment()`를 사용하여 생성하며, `appendChild()`나 `insertBefore()`를 통해 DOM에 삽입할 수 있음.
