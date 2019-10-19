//index.js
const app = getApp();
Page({
  onLoad: function(options) {
    this.setData({
      isiPhoneX: app.globalData.isiPhoneX,
    });
  },
  data: {
    isiPhoneX: false,
    dataSource: {
      name: '本人',
      image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
      mate: [{
        name: '妻子',
        image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
        children: [{
          name: '儿子',
          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
        }, {
          name: '女儿',
          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
        }],
        parent: [{
          name: '父亲',
          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
        }, {
          name: '母亲',
          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
        }]
      }],
      brother: [{
          name: '兄弟',
          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          children: [{
            name: '儿子',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }, {
            name: '女儿',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }],
          parent: [{
            name: '父亲',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }, {
            name: '母亲',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }]
        },
        {
          name: '兄弟',
          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          children: [{
            name: '儿子',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }, {
            name: '女儿',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }],
          parent: [{
            name: '父亲',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }, {
            name: '母亲',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }]
        }, {
          name: '兄弟',
          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          children: [{
            name: '儿子',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }, {
            name: '女儿',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }],
          parent: [{
            name: '父亲',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }, {
            name: '母亲',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }]
        }
      ],
      children: [{
          name: '女儿',
          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          mate: [{
            name: '女婿',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }],
        },
        {
          name: '儿子',
          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          mate: [{
            name: '儿媳',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }],
          children: [{
              name: '孙女',
              image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
              children: [{
                name: '曾外孙',
                image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                children: [{
                    name: '玄外孙',
                    image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140"
                  },
                  {
                    name: '玄外孙',
                    image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140"
                  }
                ]

              }]
            },
            {
              name: '孙子',
              image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140"
            },
            {
              name: '孙子',
              image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
              children: [{
                  name: '曾孙',
                  image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                  mate: [{
                    name: '曾孙媳',
                    image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                  }],
                },
                {
                  name: '曾孙',
                  image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                  mate: [{
                    name: '曾孙媳',
                    image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                  }],
                  children: [{
                      name: '玄孙',
                      image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                      children: [{
                        name: '来孙',
                        image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                        children: [{
                            name: '弟孙',
                            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140"
                          },
                          {
                            name: '弟孙',
                            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140"
                          }
                        ]

                      }]
                    },
                    {
                      name: '玄孙',
                      image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                      brother: [{
                          name: '兄弟',
                          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                        },
                        {
                          name: '兄弟',
                          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                        },
                        {
                          name: '兄弟',
                          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                        },
                        {
                          name: '兄弟',
                          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                        },
                        {
                          name: '兄弟',
                          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                        },
                      ],
                    },
                    {
                      name: '玄孙',
                      image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
                    }
                  ]
                }
              ],
            }
          ]
        }
      ],
      parent: [{
          name: '父亲',
          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          parent: [{
            name: '祖父',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }, {
            name: '祖母',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }]
        },
        {
          name: '母亲',
          image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          parent: [{
            name: '外祖父',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }, {
            name: '外祖母',
            image_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1135862589,761779521&fm=179&app=42&f=JPEG?w=121&h=140",
          }]
        }
      ],
    },
  },
})