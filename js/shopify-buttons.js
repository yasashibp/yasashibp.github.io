/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'dna-tag.myshopify.com',
      storefrontAccessToken: 'ded6371527a0468186cae01bf7af8305',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7739373715709',
        node: document.getElementById('product-component-1655648585128'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "margin-top" : "0px",
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "color": "#517ab0",
        ":hover": {
          "color": "#517ab0",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "7px",
        "padding-left": "32px",
        "padding-right": "32px"
      }
    },
    "buttonDestination": "checkout",
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Buy Now"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "color": "#517ab0",
        ":hover": {
          "color": "#517ab0",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "7px",
        "padding-left": "32px",
        "padding-right": "32px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "color": "#517ab0",
        ":hover": {
          "color": "#517ab0",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "7px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#ffffff",
        ":hover": {
          "background-color": "#e6e6e6"
        },
        ":focus": {
          "background-color": "#e6e6e6"
        }
      },
      "count": {
        "color": "#517ab0",
        ":hover": {
          "color": "#517ab0"
        }
      },
      "iconPath": {
        "fill": "#517ab0"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'dna-tag.myshopify.com',
      storefrontAccessToken: 'ded6371527a0468186cae01bf7af8305',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7739374141693',
        node: document.getElementById('product-component-1655735686833'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "color": "#517ab0",
        ":hover": {
          "color": "#517ab0",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "7px",
        "padding-left": "32px",
        "padding-right": "32px"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "Buy Now"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "color": "#517ab0",
        ":hover": {
          "color": "#517ab0",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "7px",
        "padding-left": "32px",
        "padding-right": "32px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "color": "#517ab0",
        ":hover": {
          "color": "#517ab0",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "7px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#ffffff",
        ":hover": {
          "background-color": "#e6e6e6"
        },
        ":focus": {
          "background-color": "#e6e6e6"
        }
      },
      "count": {
        "color": "#517ab0",
        ":hover": {
          "color": "#517ab0"
        }
      },
      "iconPath": {
        "fill": "#517ab0"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'dna-tag.myshopify.com',
      storefrontAccessToken: 'ded6371527a0468186cae01bf7af8305',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7739375485181',
        node: document.getElementById('product-component-1655648483733'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "color": "#517ab0",
        ":hover": {
          "color": "#517ab0",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "7px",
        "padding-left": "32px",
        "padding-right": "32px"
      }
    },
    "buttonDestination": "checkout",
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Buy Now"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "color": "#517ab0",
        ":hover": {
          "color": "#517ab0",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "7px",
        "padding-left": "32px",
        "padding-right": "32px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "color": "#517ab0",
        ":hover": {
          "color": "#517ab0",
          "background-color": "#e6e6e6"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#e6e6e6"
        },
        "border-radius": "7px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#ffffff",
        ":hover": {
          "background-color": "#e6e6e6"
        },
        ":focus": {
          "background-color": "#e6e6e6"
        }
      },
      "count": {
        "color": "#517ab0",
        ":hover": {
          "color": "#517ab0"
        }
      },
      "iconPath": {
        "fill": "#517ab0"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/