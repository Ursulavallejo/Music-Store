function createContentNavBar() {
    return `
<ul>
    <li class="navbar-item">
        <a class="navbar-link" href="#">New Releases</a>
    </li>
    <li class="navbar-item">
        <a class="navbar-link" href="#">Best Sellers</a>
    </li>
    <li class="navbar-item">
        <a class="navbar-link" href="#">News & Contests</a>
    </li>

    <li class="navbar-item">
        <a class="navbar-link" href="#">SALES</a>
    </li>
    <li class="navbar-item">
        <a class="navbar-link" href="#">About Us</a>
    </li>
    <li class="navbar-item">
        <a class="navbar-link" href="#">Contact Us</a>
    </li>
</ul>
`
}

document.getElementById('navbar').innerHTML = createContentNavBar()