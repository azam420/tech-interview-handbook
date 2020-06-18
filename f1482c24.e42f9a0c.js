(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),i=(r(0),r(171)),o={id:"graph",title:"Graph"},c={id:"algorithms/graph",isDocsHomePage:!1,title:"Graph",description:"Study links",source:"@site/../contents/algorithms/graph.md",permalink:"/tech-interview-handbook/algorithms/graph",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/graph.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,sidebar:"docs",previous:{title:"Geometry",permalink:"/tech-interview-handbook/algorithms/geometry"},next:{title:"Hash Table",permalink:"/tech-interview-handbook/algorithms/hash-table"}},l=[{value:"Study links",id:"study-links",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Graph search algorithms:",id:"graph-search-algorithms",children:[]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"study-links"},"Study links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/basecs/from-theory-to-practice-representing-graphs-cfd782c5be38"}),"From Theory To Practice: Representing Graphs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/basecs/deep-dive-through-a-graph-dfs-traversal-8177df5d0f13"}),"Deep Dive Through A Graph: DFS Traversal")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/basecs/going-broad-in-a-graph-bfs-traversal-959bd1a09255"}),"Going Broad In A Graph: BFS Traversal"))),Object(i.b)("h2",{id:"notes"},"Notes"),Object(i.b)("p",null,"Be familiar with the various graph representations, graph search algorithms and their time and space complexities."),Object(i.b)("p",null,"You can be given a list of edges and tasked to build your own graph from the edges to perform a traversal on. The common graph representations are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Adjacency matrix."),Object(i.b)("li",{parentName:"ul"},"Adjacency list."),Object(i.b)("li",{parentName:"ul"},"Hashmap of hashmaps.")),Object(i.b)("p",null,"A tree-like diagram could very well be a graph that allows for cycles and a naive recursive solution would not work. In that case you will have to handle cycles and keep a set of visited nodes when traversing."),Object(i.b)("h2",{id:"graph-search-algorithms"},"Graph search algorithms:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Common")," - Breadth-first Search, Depth-first Search"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Uncommon")," - Topological Sort, Dijkstra's algorithm"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Rare")," - Bellman-Ford algorithm, Floyd-Warshall algorithm, Prim's algorithm, Kruskal's algorithm")),Object(i.b)("p",null,"In coding interviews, graphs are commonly represented as 2-D matrices where cells are the nodes and each cell can traverse to its adjacent cells (up/down/left/right). Hence it is important that you be familiar with traversing a 2-D matrix. When traversing the matrix, always ensure that your current position is within the boundary of the matrix and has not been visited before."),Object(i.b)("p",null,"A simple template for doing depth-first searches on a matrix goes like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"def dfs(matrix):\n  # Check for an empty graph.\n  if not matrix:\n    return []\n\n  rows, cols = len(matrix), len(matrix[0])\n  visited = set()\n  directions = ((0, 1), (0, -1), (1, 0), (-1, 0))\n\n  def traverse(i, j):\n    if (i, j) in visited:\n      return\n\n    visited.add((i, j))\n    # Traverse neighbors.\n    for direction in directions:\n      next_i, next_j = i + direction[0], j + direction[1]\n      if 0 <= next_i < rows and 0 <= next_j < cols:\n        # Add in your question-specific checks.\n        traverse(next_i, next_j)\n\n  for i in range(rows):\n    for j in range(cols):\n      traverse(i, j)\n")),Object(i.b)("p",null,"A similar template for doing breadth-first searches on the matrix goes like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from collections import deque\n\ndef bfs(matrix):\n  # Check for an empty graph.\n  if not matrix:\n    return []\n\n  rows, cols = len(matrix), len(matrix[0])\n  visited = set()\n  directions = ((0, 1), (0, -1), (1, 0), (-1, 0))\n\n  def traverse(i, j):\n    queue = deque([(i, j)])\n    while queue:\n      curr_i, curr_j = queue.popleft()\n      if (curr_i, curr_j) not in visited:\n        visited.add((curr_i, curr_j))\n        # Traverse neighbors.\n        for direction in directions:\n          next_i, next_j = curr_i + direction[0], curr_j + direction[1]\n          if 0 <= next_i < rows and 0 <= next_j < cols:\n            # Add in your question-specific checks.\n            queue.append((next_i, next_j))\n\n  for i in range(rows):\n    for j in range(cols):\n      traverse(i, j)\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: While DFS is implemented using recursion in this sample, it could also be implemented iteratively similar to BFS. The key difference between the algorithms lies in the underlying data structure (BFS uses a queue while DFS uses a stack). The ",Object(i.b)("inlineCode",{parentName:"p"},"deque")," class in Python can function as both a stack and a queue")),Object(i.b)("p",null,"For additional tips on BFS and DFS, you can refer to this ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://leetcode.com/problems/pacific-atlantic-water-flow/discuss/90774/Python-solution-with-detailed-explanation"}),"LeetCode post")),Object(i.b)("h2",{id:"corner-cases"},"Corner cases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Empty graph"),Object(i.b)("li",{parentName:"ul"},"Graph with one or two nodes"),Object(i.b)("li",{parentName:"ul"},"Disjoint graphs"),Object(i.b)("li",{parentName:"ul"},"Graph with cycles")),Object(i.b)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/problems/clone-graph/"}),"Clone Graph")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/problems/course-schedule/"}),"Course Schedule")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/problems/pacific-atlantic-water-flow/"}),"Pacific Atlantic Water Flow")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/problems/number-of-islands/"}),"Number of Islands")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/problems/longest-consecutive-sequence/"}),"Longest Consecutive Sequence")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/problems/alien-dictionary/"}),"Alien Dictionary (LeetCode Premium)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/problems/graph-valid-tree/"}),"Graph Valid Tree (LeetCode Premium)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"}),"Number of Connected Components in an Undirected Graph (LeetCode Premium)"))))}p.isMDXComponent=!0},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return r?a.a.createElement(d,c({ref:t},s,{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);