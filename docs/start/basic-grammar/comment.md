---
sidebar_position: 2
---

# 1.2 注释

随着代码量越来越庞大, 越来越复杂, 阅读并理解其逻辑也越来越困难，想看明白一段代码的逻辑和功能是比较困难的。

所以, 在程序代码中加入一些自然语言备注说明, 以解释其作用, 便显得异常重要。 这些备注说明叫`注释`。

注释是编程语言的一个重要组成部分，用于在源代码中解释代码的作用从而增强程序的可读性。当然，我们也可以将源代码中暂时不需要运行的代码段通过注释来去掉，这样当你需要重新使用这些代码的时候，去掉注释符号就可以了。

简单的说，注释目的是让代码更容易看懂但不会影响程序的执行结果。

## 单行注释

单行注释以井号( #) 开头，如：

```py
p = 5 # 1个5瓦小灯泡
t = 10 # 小灯泡开了 10 个小时
# 耗电
w = p*t
```

## 多行注释

Python 三重引号（"""...""" 或 '''...'''）本身是用于多行字符串，也可以用来做多行注释。

```py
def people(age):
    '''
    这是多行注释。
    再来一行
    还能有。。。
    '''
    if age >= 18 and age <= 20:
        return '适龄'
    elif age < 18:
        return '低龄'
    else:
        return '超龄'

print(people(8))
```

## 怎样写注释？

- 首先代码即注释，代码直接能看懂的就没必要注释，看代码不容易理解意图的时候才需要加注释
- 多说为什么，少说是什么
- 注释描述要简洁，应避免长篇大论
