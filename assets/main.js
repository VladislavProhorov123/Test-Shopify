const headers = document.querySelectorAll('.accordion-header')
const mainImg = document.getElementById('main-product-image')
headers.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement
        const content = item.querySelector('.accordion-content')
        const icon = header.querySelector('i')
        const isActive = item.classList.contains('active')

        document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active')
            i.querySelector('.accordion-content').style.maxHeight = null
            const iconInside = i.querySelector('.accordion-header i')
            if(iconInside) {
                iconInside.classList.remove('ri-arrow-up-s-line')
                iconInside.classList.add('ri-arrow-down-s-line')
            }
        })
        if(!isActive) {
            item.classList.add('active')
            content.style.maxHeight = content.scrollHeight + 'px'
            if(icon) {
                icon.classList.remove('ri-arrow-down-s-line')
                icon.classList.add('ri-arrow-up-s-line')
            }
        }
    })
})

document.querySelectorAll('.accordion-list').forEach(i => {
    const item = i.querySelectorAll('li')
    if(item.length > 4) {
        i.style.gridTemplateColumns = 'repeat(2, 1fr)'
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const listImg = document.querySelectorAll('.list-img')
    const colorBox = document.querySelectorAll('.color')
    const variantTitle = document.getElementById('variantTitle')

    listImg.forEach(img => {
        img.addEventListener('click', () => {
            const mainSrc = mainImg.src
            const innerSrc = img.dataset.full

            mainImg.src = innerSrc
            img.dataset.full = mainSrc

            img.src = mainSrc.replace('width=500', 'width=150')
        })
    })

    colorBox.forEach(color => {
        color.addEventListener('click', () => {
            const imgSrc = color.dataset.img
            const title = color.dataset.title

            if(imgSrc) {
                mainImg.src = imgSrc
            }
            if(title) {
                variantTitle.textContent = title
            }

            colorBox.forEach(i => i.classList.remove('active'))
            color.classList.add('active')
        })
    })
})

document.querySelectorAll('.color').forEach(color =>{
    color.addEventListener('click', () => {
        document.querySelectorAll('.color').forEach(i => i.classList.remove('active'))
        color.classList.add('active')
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const arrListImg = Array.from(document.querySelectorAll('.list-img'))
    const leftBtn = document.querySelector('.arrow.left')
    const rightBtn = document.querySelector('.arrow.right')

    const imageUrls = arrListImg.map(img => img.dataset.full)

    let currentIndex = imageUrls.indexOf(mainImg.src)

    if(currentIndex === -1) {
        currentIndex = 0
        mainImg.src = imageUrls[0]
    }

    function updateImg(index) {
        currentIndex = index
        mainImg.src = imageUrls[currentIndex]
    }

    leftBtn.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length
        updateImg(newIndex)
    })

    rightBtn.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % imageUrls.length
        updateImg(newIndex)
    })
})