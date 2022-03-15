    //   on scroll header navbar
        window.addEventListener('scroll', function () {
            const header = document.querySelector('header');
            header.classList.toggle("sticky", window.scrollY > 0);
        });

        // for hambergur menu
        function toggleMenu() {
            const menuToggle = document.querySelector('.menuToggle');
            const navigation = document.querySelector('.navigation');
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');

        }
        // js for copyright current year
        const year = document.querySelector('#year');
        year.innerHTML = new Date().getFullYear();

        