module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        smoothScroll: true,
        logo: '/images/logo.png',
        // navbar: false,           // diable navbar globally
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { 
                        text: 'Chinese', 
                        link: '/language/chinese',
                        items: [
                            { text: 'Mandarin', link: '/language/chinese/madarin' },
                            { text: 'Cantonese', link: '/language/chinese/cantonese' },
                        ]
                    },
                    { text: 'Japanese', link: '/language/japanese' },
                ]
            }
        ],
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    }
  }