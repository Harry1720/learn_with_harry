---
title: "Bài 5: CÁC PHƯƠNG PHÁP SUY DIỄN"
---

## 1. Các phương pháp suy diễn

- Trong các chứng minh toán học, xuất phát từ một số khẳng định đúng $p, q, r, \ldots$ (tiền đề), ta áp dụng các quy tắc suy luận để suy ra chân lí của một mệnh đề $h$ mà ta gọi là kết luận.

  > *Suy luận là rút ra mệnh đề mới từ một hoặc nhiều mệnh đề đã có.*

- Nói cách khác, dùng các quy tắc suy luận để chứng minh: $(p \wedge q \wedge r \wedge \ldots)$ có hệ quả logic là $h$.

- Ta thường mô hình hóa phép suy luận đó dưới dạng
  $$
  \begin{array}{l}
  p \\
  q \\
  r \\
  \ldots \\
  \hline \therefore h
  \end{array}
  $$

- Viết dưới dạng hằng đúng
  $$
  (p \wedge q \wedge r \wedge \ldots) \rightarrow h
  $$
  
  - $(p \wedge q \wedge r \wedge \ldots)$: Hội các giả thiết/ Tiền đề

  - $h$: Kết luận

### 1.1. Phương pháp khẳng định (Modus Ponens)

| $p \rightarrow q$ | "Nếu An chăm học thì sẽ thi đậu Toán rời rạc" |
| :--- | :--- |
| $p$ | "Mà An chăm học" |
| $\therefore q$ | "Vậy An thi đậu Toán rời rạc" |

 $\rightarrow$ Thể hiện bằng hằng đúng: **\[(*p* → *q*) ∧ *p*\] → *q***

### 1.2. Phương pháp phủ định (Modus Tollens)

| $p \rightarrow q$ | "Nếu An chăm học thì sẽ thi đậu Toán rời rạc" |
| :--- | :--- |
| $\overline{q}$ | "Mà An không đậu Toán rời rạc" |
| $\therefore \overline{p}$ | "Vậy An không chăm học" |

  $\rightarrow$ Thể hiện bằng hằng đúng: **\[(*p* → *q*) ∧ ¬*q*\] → ¬*p***

### 1.3. Phương pháp tam đoạn luận (Syllogism) (Bắc cầu)

| $p \rightarrow q$ | "Nếu áp dụng phần mềm thì hiệu quả công việc tăng" |
| :--- | :--- |
| $q \rightarrow r$ | "Nếu hiệu quả công việc tăng thì doanh thu của đơn vị tăng" |
| $\therefore p \rightarrow r$ | "Vậy, nếu áp dụng phần mềm thì doanh thu của đơn vị tăng" |

  $\rightarrow$ Thể hiện bằng hằng đúng: **\[(*p* → *q*) ∧ *(q* → *r)*\] → *(p* → *r)***

![](./img/image36.png)

  $\rightarrow$ *Tam đoạn luận trên hoàn toàn hợp logic. Tuy nhiên kết luận mâu thuẫn là do dựa trên một tiền đề sai.*

### 1.4. Phương pháp tam đoạn luận rời

* $[(p \vee q) \wedge \overline{p}] \rightarrow q \Leftrightarrow 1$

* Giải thích: *chỉ có thể là p hoặc q mà không p nên q!*

> *Khi chỉ có đúng 2 trường hợp có thể xảy ra, mà một trong hai trường hợp đã được khẳng định là SAI thì trường hợp còn lại mặc nhiên ĐÚNG.*

- ***Ví dụ:*** An hoặc ở trong nhà hoặc ở ngoài sân. Mà An không ở trong nhà. Vậy An ở ngoài sân.

### 1.5. Các phương pháp suy luận đơn giản

| Quy tắc | Sơ đồ | Hằng đúng |
| :---: | :---: | :--- |
| Nối liền<br>(Conjunction) | $\begin{array}{c} p \\ q \\ \hline \therefore p \wedge q \end{array}$ | Nếu **P** đúng và **Q** đúng, thì **P$\wedge$Q** đúng.<br>$(p \wedge q) \rightarrow (p \wedge q)$ |
| (Rút gọn)<br>Đơn giản<br>(Simplification) | $\begin{array}{c} p \wedge q \\ \hline \therefore p \end{array}$ | Nếu **P$\wedge$Q** đúng, thì: **P** đúng, **Q** đúng.<br>$(p \wedge q) \rightarrow p$ |
| Cộng<br>(Addition) | $\begin{array}{c} p \\ \hline \therefore p \vee q \end{array}$ | Nếu **P** đúng, thì suy ra **P$\vee$Q** đúng<br>$p \rightarrow (p \vee q)$<br>(bất kể Q có đúng hay sai). |
| Loại bỏ mâu thuẫn<br>(Resolution) | $\begin{array}{c} p \vee q \\ \overline{p} \vee r \\ \hline \therefore q \vee r \end{array}$ | $(p \vee q) \wedge (\overline{p} \vee r) \rightarrow q \vee r$ |

**Ví dụ.** Xem xét suy luận sau:
- Nếu ca sĩ Sơn Tùng không trình diễn hay số vé bán ra ít hơn 1000 thì đêm diễn sẽ bị hủy bỏ và ông bầu rất buồn.
- Nếu đêm biểu diễn bị hủy bỏ thì phải trả lại tiền vé cho khán giả.
- Nhưng tiền vé đã không được trả lại cho khán giả.
Vậy ca sĩ Sơn Tùng có trình diễn.

**Hỏi:** Suy luận trên đúng hay sai?

  - Nếu ta đặt:

    - $p$: “ca sĩ Sơn Tùng đã trình diễn”

    - $q$: “số vé bán ra ít hơn 1000”

    - $r$: “đêm diễn sẽ bị hủy bỏ”

    - $t$: “trả lại tiền vé cho khán giả”
    
    - $s$: “ông bầu rất buồn”

  - Ta có sơ đồ suy luận sau:

  $$
  \begin{array}{l}
  (\neg p \vee q) \rightarrow (r \wedge s) \\
  r \rightarrow t \\
  \neg t \\
  \hline \therefore p
  \end{array}
  $$

  - Suy luận trên có thể được thực hiện theo các bước sau:

    $\begin{array}{ll}
    \neg p \vee q \rightarrow r \wedge s & \text{(Tiền đề)} \\
    r \wedge s \rightarrow r & \text{(hằng đúng gọi là phép đơn giản nối liền)} \\
    r \rightarrow t & \text{(Tiền đề)} \\
    \therefore \neg p \vee q \rightarrow t & \text{(Tam đoạn luận mở rộng)} \\
    \text{mà} \quad \neg t & \text{(Tiền đề)} \\
    \therefore \neg(\neg p \vee q) & \text{(Phương pháp phủ định)} \\
    \text{hay} \quad p \wedge \neg q & \text{(Quy tắc De Morgan và phủ định của phủ định)} \\
    \text{mà} \quad p \wedge \neg q \rightarrow p & \text{(Phép đơn giản nối liền)} \\
    \therefore p & \text{(Phương pháp khẳng định)}
    \end{array}$

### 1.6. Phương pháp mâu thuẫn

**f. Quy tắc mâu thuẫn**

- Ta có tương đương logic

$$[(p_1 \wedge p_2 \wedge \ldots \wedge p_n) \rightarrow q] \Leftrightarrow [(p_1 \wedge p_2 \wedge \ldots \wedge p_n \wedge \neg q) \rightarrow 0].$$

- Do đó nếu chứng minh được dạng mệnh đề ở bên phải là một hằng đúng thì dạng mệnh đề ở bên trái cũng là một hằng đúng.

- Nói cách khác nếu thêm giả thiết phụ $\neg q$ vào các tiền đề cho trước mà dẫn đến một mâu thuẫn thì $q$ là hệ quả logic của các tiền đề cho trước.

**Ví dụ.** Chứng minh suy luận sau
$$
\begin{array}{l}
p \rightarrow r \\
\neg p \rightarrow q \\
q \rightarrow s \\
\hline \therefore \neg r \rightarrow s
\end{array}
$$

**Giải.** 

- Phủ định kết luận
$$\neg(\neg r \rightarrow s) \Leftrightarrow \neg(r \vee s) \Leftrightarrow \neg r \wedge \neg s$$

- Ta thêm điều này vào tiền đề. Khi đó ta sẽ chứng minh suy luận sau:
$$
\begin{array}{l}
p \rightarrow r \\
\neg p \rightarrow q \\
q \rightarrow s \\
\neg r \wedge \neg s \\
\hline \therefore \mathbf{0}
\end{array}
$$

- Ta lần lượt thực hiện các quy tắc suy luận sau:
$$
\begin{array}{l}
\neg r \wedge \neg s \\
\hline \therefore \neg r
\end{array}
\quad
\begin{array}{l}
p \rightarrow r \\
\neg r \\
\hline \therefore \neg p
\end{array}
\quad
\begin{array}{l}
\neg r \wedge \neg s \\
\hline \therefore \neg s
\end{array}
\quad
\begin{array}{l}
q \rightarrow s \\
\neg s \\
\hline \therefore \neg q
\end{array}
\quad
\begin{array}{l}
\neg p \rightarrow q \\
\neg p \\
\hline \therefore q
\end{array}
\quad
\begin{array}{l}
\neg q \\
q \\
\hline \therefore \mathbf{0}
\end{array}
$$

- Như vậy suy luận trên đã được chứng minh

### 1.7. Phản ví dụ

- Để chứng minh suy luận đúng, chúng ta sẽ sử dụng các luật logic và quy tắc suy luận.

- Để chỉ một suy luận sai (hay còn gọi là ngụy biện) ta sẽ đưa giá các giá trị làm cho các tiền đề đúng nhưng kết luận thì sai.

**Ví dụ.** Kiểm tra suy luận sau đúng hay sai
$$
\begin{array}{l}
\neg p \rightarrow q \\
(q \wedge r) \rightarrow s \\
t \rightarrow r \\
p \\
\hline \therefore \neg s \rightarrow \neg t
\end{array}
$$

**Giải.** Cho $s = 0, t = 1, p = 1, q = 0, r = 1$, ta thấy các tiền đề đều đúng, nhưng kết luận sai. Suy ra suy luận trên là sai.

