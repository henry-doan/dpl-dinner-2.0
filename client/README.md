                      
              Index
                |
                App (Routes)
                |          |         |        |
              Diners      Home     About    NoMatch
                / \
  DinerForm(add)   DinerList
                      \
                      DinerShow (Link)
                        \         \
                        Menus    DinerForm(Update)
                          / \
              MenuForm(add)  MenuList
                              \ 
                            MenuShow (Link)
                              /  \
                        ItemForm  Items
                                    \
                                    item
                                 