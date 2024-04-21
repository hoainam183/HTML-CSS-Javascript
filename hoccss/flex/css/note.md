# Các thuộc tính trong nhóm Flex Container
- display: flex | flex-inline => kích hoạt flex
- flex-direction: chọn hướng cho trục chính (main axis)
+ row
+ row-reverse
+ column
+ column-reverse

- justify-content
+ flex-start
+ flex-end
+ center
+ space-around 
+ space-evenly
+ space-between

- align-items: căn chỉnh các item theo hướng vuông góc với trục chính
+ strech: default
+ flex-start
+ center
+ flex-end
+ baseline

- flex-wrap: 
+ nowrap 
+ wrap 
- align-content: Căn chỉnh hàng cột theo hướng vuông gốc với trục chính
## Các thuộc tính trong nhóm Flex Item
- flex-grow: Dãn đều các item
=> Số nguyên: 0 - không giãn, 1: gián đều
- flex-shrink
- flex-basic
+ Bị chặn bởi min-width và max-width nếu là row

-flex: flex-grow shrink basis