---
sidebar_position: 7
---

# 1.7 行与缩进

## 行结构

Python 的行分 `物理行` 和 `逻辑行`。

`物理行` 是我们写的每行代码。

Python 程序可以拆分为多个 `逻辑行`。

一个逻辑行可能是一个物理行，也可能是多个物理行。根据显式或隐式 `行拼接` 规则，一个或多个 `物理行` 可组成 `逻辑行`。

```python
# 隐式行拼接成一个逻辑行
students = [
  'lilei',
  'hanmeimei',
  'polly'
]

# 隐式行拼接成一个逻辑行
def my_fun():
  return 123
```

Python 通常是一行写完一条语句，但如果语句很长，我们可以使用反斜杠 \ 来实现多行语句，例如：

```python

# 用 \ 在行尾可显式拼接行，把多行拼接成一个逻辑行
area = '广西' \
       + '桂林' \
       + '阳朔'

# 字符串连接可省略 + 号
area = '广西' \
       '桂林' \
       '阳朔'

# area = '广西桂林阳朔'
```

## 缩进

python 最具特色的就是使用缩进来表示代码块，逻辑行开头的空白符（空格符和制表符）用于计算该行的缩进层级，空格数相同的为同一层级代码。

缩进的空格数是可变的，但是同一个代码块的语句必须包含相同的缩进空格数（建议用4个空格）。实例如下：

```python
def people(age):
    if age >= 18 and age <= 20:
        return '适龄'
    elif age < 18:
        return '低龄'
    else:
        return '超龄'

print(people(8))
```

Python 解释器根据逻辑行代码前面的空格数来确定代码块的层级，空格数相同的为同一层级代码，每层级代码相差4个空格。
