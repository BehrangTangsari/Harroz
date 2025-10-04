const router = {
    404: {
        URL: "./404.html",
        title: "",
    },
    "/": {
        URL: "./index.html",
        title: "",
    },
    "/Harroz/blog": {
        URL: "./blog.html",
        title: "",
    },
    "/Harroz/courses": {
        URL: "./courses.html",
        title: "",
    },
    "/Harroz/product": {
        URL: "./product.html",
        title: "",
    },
    "/Harroz/article": {
        URL: "./article.html",
        title: "",
    },
    "/Harroz/cart": {
        URL: "./cart.html",
        title: "",
    },
};



document.addEventListener('click', event => {
    event.preventDefault();
    event.target.className.includes('nav-link') ? urlRoutes(event) : false
})

const urlRoutes = async event => {
    history.pushState({}, '', event.target.href)
    locationHandler()
}

const locationHandler = async () => {
    const getPathname = location.pathname
    const route = router[getPathname] || router[404]
    const setHtmlContent = await fetch(route.URL).then((res) => res.text())

    document.getElementById('content').innerHTML = setHtmlContent
}

onpopstate = locationHandler
