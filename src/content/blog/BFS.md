---
title: 'Breath First Search(BFS) Explain - Chinese 中文版'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'May 6 2025'
heroImage: '/BFS-concept.png'
tags: ['Algorithm', 'Graph Theory', 'Notes']
---

> diagram credits to Guru99.com

广度优先搜索( Breath First Search) 是一种图遍历算法，用于从给定的起始节点开始，逐层地探索图或树的结构，以找到目标节点或满足特定条件的节点。在广度优先搜索中，我们需要按照节点的距离顺序进行扩展和探索。

**目的:** 找到两个位置之间的「最短」距离（不是最快，是段数最少）。

1. 从节点A出发，有前往节点B的路径吗？
2. 从节点A出发，前往节点B的路径哪条最短？

**应用：** 国际跳棋AI、拼写检查器、人际关系中关系最近的朋友等

## 实际应用

以寻找关系最近的朋友为例，朋友是一度关系，朋友的朋友是二度关系，在你看来，一度胜过二度。因此，你应该先从一度关系开始搜查，范围逐渐往外延伸。

[[哈希表 - Hash Table]]可以用来表示图关系。在以上例子中，哈希表可以用来映射节点到朋友。在以下代码的实施中，key是`“you”`，而value是一个包含所有最近朋友的数组 `["alice", "bob", "claire"]`。

![bfs drawing illustration](/BFS-draw.jpeg)

```Python
# Using HashMap to create a graph
graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []
```

Anuj、Peggy、Thom和Jonny都没有邻居，这是因为虽然有指向他们的箭头，但没有从他们出发指向其他人的箭头。这被称为**有向图（directed graph）**，其中的关系是单向的。

## 算法实现步骤

1. 创建一个队列，用于存储要检查的人
2. 从队列中弹出一个人
    1. 检查是否是「目标」
        1. 是：搜索成功
        2. 否：将这个人的邻居 / 朋友添加入队列
3. 回到第二步
4. 如果队列为空，则目标不存在

```Python

def BFS(target, root="you"):
    search_queue = deque()
    search_queue += graph[root]
    # To avoid double lined relationship causing infinite loop
    searched = []
    # When the queue is not empty
    while search_queue:
        person = search_queue.popleft()
        if person not in searched:
            if person is target:
                print("Target found")
                return True
            else:
                search_queue += graph[person]
                searched.append(person)
    return False
```

### 运行时间

广度优先搜索的运行时间为

**O(number of vertex + number of edge) == O(V + E)**