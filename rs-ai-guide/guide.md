# 遥感图像解译 × 人工智能科研：新生入门与进阶学习路线（2026版）

> **适用对象**：准备进入遥感图像解译、计算机视觉（CV）、视觉语言模型（VLM）、多模态大语言模型（MLLM）与 Agentic Earth Observation 方向开展科研的本科高年级/硕士新生。  
> **版本日期**：2026-09-08  
> **核心原则**：先把“图像—任务—指标—代码”学明白，再进入 VLM / MLLM / Agent。不要跳过传统 CV、遥感基础和实验规范。  
> **资源筛选规则**：
> 1. 本文列入“必读/进阶论文”的论文均给出可公开访问的代码仓库或公开实现；
> 2. 列入“必会模型”的模型均配有可在 Bilibili 学习的中文解读/源码/复现视频；
> 3. 推荐优先阅读论文英文原文，并把视频作为辅助，不要用视频代替论文；
> 4. 前沿模型、代码仓库和视频链接可能随时间变化，建议每学期更新一次。

---

## 0. 先明确：我们研究的“遥感图像解译”是什么？

遥感图像解译并不是“给卫星图片套一个网络”。完整的研究对象包括：

- **场景级理解**：scene classification、multi-label classification；
- **目标级理解**：object detection、oriented object detection、counting、tracking；
- **像素级理解**：semantic segmentation、instance segmentation、panoptic segmentation、referring segmentation；
- **时序理解**：change detection、bi-temporal / multi-temporal interpretation；
- **多传感器理解**：optical、SAR、infrared、multispectral、hyperspectral；
- **视觉—语言理解**：image-text retrieval、captioning、VQA、grounding、open-vocabulary recognition；
- **开放世界理解**：zero-shot、open-vocabulary、open-set、training-free inference；
- **通用遥感基础模型**：self-supervised pretraining、foundation models；
- **多模态大模型**：RS-VLM / RS-MLLM；
- **智能体地球观测**：Agent 根据自然语言意图进行任务规划、工具选择、检测/分割/变化检测调用与结果解释。

建议把自己的能力树理解为：

```text
数学 / Python / Linux / Git
        ↓
OpenCV + PyTorch + 遥感基础
        ↓
CNN → Transformer
        ↓
分类 / 检测 / 分割 / 变化检测
        ↓
视觉基础模型 DINO / SAM
        ↓
CLIP / Grounding / Open-Vocabulary
        ↓
RemoteCLIP / SegEarth-OV / RemoteSAM
        ↓
BLIP-2 / LLaVA / Qwen-VL
        ↓
GeoChat / EarthGPT / LHRS-Bot
        ↓
Reasoning / Tool Use / ReAct
        ↓
RemoteReasoner / RemoteAgent / Agentic EO
```

---

# 1. 入组前必须具备的基础能力

## 1.1 Python 与工程基础

至少能够独立完成：

- [ ] Python 基础语法、类、装饰器、迭代器、上下文管理器；
- [ ] NumPy 张量操作；
- [ ] Pandas 基础数据处理；
- [ ] Matplotlib 可视化；
- [ ] OpenCV 图像读写与基本处理；
- [ ] PyTorch Dataset / DataLoader；
- [ ] 自己写一个 `nn.Module`；
- [ ] 自己写训练循环；
- [ ] 计算 Accuracy / Precision / Recall / F1 / IoU / mIoU；
- [ ] 保存和加载 checkpoint；
- [ ] 理解 `train()` / `eval()` / `torch.no_grad()`；
- [ ] Linux 文件、权限、进程与显卡查看；
- [ ] SSH、scp/rsync；
- [ ] Conda 环境管理；
- [ ] Git clone / pull / branch / commit / merge；
- [ ] 阅读 README 并把陌生仓库运行起来；
- [ ] 使用 TensorBoard 或 Weights & Biases 记录实验。

### 必会工具

```text
Python
PyTorch
TorchVision
OpenCV
NumPy
Matplotlib
Git
Linux
Conda / Mamba
CUDA 基础
VS Code / PyCharm
Jupyter
TensorBoard / WandB
LaTeX / Overleaf
Zotero
```

### 遥感方向额外工具

```text
GDAL
Rasterio
GeoPandas
Shapely
QGIS
OpenCV
MMEngine
MMCV
MMDetection
MMSegmentation
MMRotate / rotated detection 工具
Hugging Face Transformers
PEFT
LLaMA-Factory / ms-swift（进入 MLLM 阶段后）
```

---

# 2. 前置“专业英语”学习

科研英语的目标不是通过英语考试，而是达到：

> **能够不依赖全文翻译，直接阅读英文论文、README、Issue、代码注释和实验日志。**

---

## 2.1 第一批必须熟记的遥感英语

| English | 中文 |
|---|---|
| remote sensing | 遥感 |
| Earth observation (EO) | 地球观测 |
| remote sensing imagery (RSI) | 遥感影像 |
| aerial imagery | 航空/航拍影像 |
| satellite imagery | 卫星影像 |
| optical imagery | 光学影像 |
| synthetic aperture radar (SAR) | 合成孔径雷达 |
| infrared imagery | 红外影像 |
| multispectral imagery | 多光谱影像 |
| hyperspectral imagery | 高光谱影像 |
| spatial resolution | 空间分辨率 |
| spectral resolution | 光谱分辨率 |
| temporal resolution | 时间分辨率 |
| radiometric resolution | 辐射分辨率 |
| ground sample distance (GSD) | 地面采样距离 |
| revisit | 重访 |
| swath | 幅宽 |
| off-nadir | 非正下视/侧视 |
| incidence angle | 入射角 |
| georeferencing | 地理配准 |
| co-registration | 共配准 |
| orthorectification | 正射校正 |
| coordinate reference system (CRS) | 坐标参考系统 |
| map projection | 地图投影 |
| raster | 栅格 |
| vector | 矢量 |
| tile / chip / patch | 切片 / 图块 |
| land cover | 地表覆盖 |
| land use | 土地利用 |
| spectral signature | 光谱特征 |
| speckle noise | SAR 斑点噪声 |
| cloud cover | 云覆盖 |
| atmospheric effect | 大气影响 |
| seasonal variation | 季节变化 |
| illumination variation | 光照变化 |

---

## 2.2 CV / 遥感解译高频英语

| English | 中文 |
|---|---|
| scene classification | 场景分类 |
| object detection | 目标检测 |
| oriented object detection | 旋转目标检测 |
| horizontal bounding box (HBB) | 水平框 |
| oriented bounding box (OBB) | 旋转框 |
| semantic segmentation | 语义分割 |
| instance segmentation | 实例分割 |
| panoptic segmentation | 全景分割 |
| change detection | 变化检测 |
| referring segmentation | 指代表达分割 |
| visual grounding | 视觉定位 |
| image captioning | 图像描述 |
| visual question answering (VQA) | 视觉问答 |
| image-text retrieval | 图文检索 |
| small object | 小目标 |
| dense prediction | 密集预测 |
| class imbalance | 类别不平衡 |
| long-tail distribution | 长尾分布 |
| domain shift | 域偏移 |
| domain adaptation | 域适应 |
| domain generalization | 域泛化 |
| test-time adaptation (TTA) | 测试时自适应 |
| robustness | 鲁棒性 |
| corruption | 退化/扰动 |
| cross-domain | 跨域 |
| cross-sensor | 跨传感器 |
| multi-temporal | 多时相 |
| multi-modal | 多模态 |

---

## 2.3 深度学习与 Transformer 高频英语

| English | 中文 |
|---|---|
| backbone | 主干网络 |
| neck | 特征融合部分 |
| prediction head | 预测头 |
| encoder | 编码器 |
| decoder | 解码器 |
| feature map | 特征图 |
| feature pyramid | 特征金字塔 |
| receptive field | 感受野 |
| stride | 步长 |
| dilation | 空洞率 |
| token | token / 表征单元 |
| patch token | 图像块 token |
| class token | 类别 token |
| query | 查询向量 |
| key / value | 键 / 值 |
| self-attention | 自注意力 |
| cross-attention | 交叉注意力 |
| multi-head attention | 多头注意力 |
| positional embedding | 位置编码 |
| embedding | 嵌入 |
| normalization | 归一化 |
| residual connection | 残差连接 |
| feed-forward network (FFN) | 前馈网络 |
| pretraining | 预训练 |
| fine-tuning | 微调 |
| linear probing | 线性探测 |
| self-supervised learning | 自监督学习 |
| contrastive learning | 对比学习 |
| masked image modeling | 掩码图像建模 |
| distillation | 蒸馏 |
| parameter-efficient fine-tuning (PEFT) | 参数高效微调 |
| LoRA | 低秩适配 |

---

## 2.4 VLM / MLLM / Agent 高频英语

| English | 中文 |
|---|---|
| vision-language model (VLM) | 视觉语言模型 |
| multimodal large language model (MLLM) | 多模态大语言模型 |
| image-text alignment | 图文对齐 |
| contrastive language-image pretraining | 图文对比预训练 |
| prompt | 提示词 |
| prompt engineering | 提示工程 |
| prompt tuning | 提示微调 |
| zero-shot | 零样本 |
| few-shot | 少样本 |
| open-vocabulary | 开放词汇 |
| open-set | 开放集 |
| grounding | 视觉定位/落地 |
| referring expression | 指代表达 |
| instruction tuning | 指令微调 |
| supervised fine-tuning (SFT) | 监督微调 |
| reinforcement learning (RL) | 强化学习 |
| reasoning | 推理 |
| chain-of-thought (CoT) | 思维链 |
| hallucination | 幻觉 |
| retrieval-augmented generation (RAG) | 检索增强生成 |
| agent | 智能体 |
| tool use | 工具调用 |
| tool calling | 工具调用 |
| planner | 规划器 |
| executor | 执行器 |
| memory | 记忆模块 |
| routing | 路由 |
| orchestration | 编排 |
| workflow | 工作流 |
| environment | 环境 |
| observation | 观测 |
| action | 动作 |
| reward | 奖励 |
| policy | 策略 |
| reinforcement fine-tuning | 强化式微调 |
| Model Context Protocol (MCP) | 模型上下文协议 |

---

## 2.5 论文中必须一眼看懂的表达

```text
We propose ...
我们提出……

We formulate the problem as ...
我们将该问题表述为……

Unlike previous methods, ...
与已有方法不同……

To this end, ...
为此……

Specifically, ...
具体而言……

The main contribution is ...
主要贡献是……

We conduct extensive experiments on ...
我们在……上进行了广泛实验。

Our method consistently outperforms ...
我们的方法持续优于……

Ablation studies demonstrate that ...
消融实验表明……

The results suggest that ...
结果说明……

generalize to unseen categories
泛化到未见类别

without additional training / fine-tuning
无需额外训练/微调

under domain shifts
在域偏移条件下

at inference time
在推理阶段

in a training-free manner
以无需训练的方式
```

---

## 2.6 新生读英文论文的“三遍法”

### 第一遍：10–20 分钟

只看：

1. Title  
2. Abstract  
3. Introduction 最后一段贡献  
4. Figure 1 / Method Overview  
5. Main Results Table  
6. Conclusion  

回答：

```text
作者解决什么问题？
为什么以前的方法不行？
作者提出了什么？
最核心实验结果是什么？
```

### 第二遍：30–90 分钟

重点看：

- Method；
- 模型输入输出；
- loss；
- training / inference protocol；
- dataset；
- metrics；
- ablation。

### 第三遍：论文 + 代码一起看

要求定位：

```text
论文中的 module → 代码哪个 class？
公式 → 哪个 function？
loss → 哪个文件？
dataset → 哪个 config？
evaluation → 哪个 script？
```

> **没有完成第三遍，通常不能算真正读懂一篇算法论文。**

---

# 3. 传统 CV：必须先会，但不必沉迷

在开始深度学习以前，至少理解并能用 OpenCV 实现：

- [ ] RGB / HSV / Gray；
- [ ] histogram；
- [ ] convolution；
- [ ] Gaussian filter；
- [ ] median filter；
- [ ] Sobel；
- [ ] Canny；
- [ ] thresholding；
- [ ] morphology：erosion / dilation / opening / closing；
- [ ] connected components；
- [ ] contour；
- [ ] Hough transform；
- [ ] SIFT / ORB；
- [ ] feature matching；
- [ ] RANSAC；
- [ ] homography；
- [ ] image registration；
- [ ] optical flow；
- [ ] Fourier transform。

### 练习

1. 对无人机影像进行边缘提取；
2. 用 SIFT/ORB + RANSAC 配准两张航拍图；
3. 利用形态学清理二值建筑物 mask；
4. 对变化检测双时相影像尝试传统差分方法。

这些内容的意义不是为了以后继续用传统算法发论文，而是为了理解：

> **图像为什么会变、特征是什么、噪声来自哪里、几何变换怎么影响模型。**

---

# 4. 必会模型清单：每个模型都配 Bilibili 学习资源

> 建议顺序：**ResNet → U-Net → ViT → Swin → YOLO → DETR → Mask2Former → DINOv3 → CLIP → SAM → Grounding DINO → BLIP-2 → LLaVA → Qwen-VL**

| 等级 | 模型 | 必须掌握什么 | 官方/主流代码 | Bilibili 解读 |
|---|---|---|---|---|
| S | ResNet | residual / shortcut / stage / backbone | https://github.com/pytorch/vision | https://www.bilibili.com/video/BV1P3411y7nn/ |
| S | U-Net | encoder-decoder / skip connection / segmentation | https://github.com/milesial/Pytorch-UNet | https://www.bilibili.com/video/BV1RY4y1m7vi/ |
| S | ViT | patch embedding / MHSA / CLS token | https://github.com/google-research/vision_transformer | https://www.bilibili.com/video/BV15P4y137jb/ |
| S | Swin Transformer | window attention / shifted window / hierarchical feature | https://github.com/microsoft/Swin-Transformer | https://www.bilibili.com/video/BV13L4y1475U/ |
| S | YOLO | one-stage detection / label assignment / NMS / detection pipeline | https://github.com/ultralytics/ultralytics | https://www.bilibili.com/video/BV1RRcUeWEPe/ |
| S | DETR | object query / Hungarian matching / set prediction | https://github.com/facebookresearch/detr | https://www.bilibili.com/video/BV1T6421F7tR/ |
| S | Mask2Former | mask classification / masked attention / universal segmentation | https://github.com/facebookresearch/Mask2Former | https://www.bilibili.com/video/BV1EA22YnEY1/ |
| S | CLIP | contrastive image-text alignment / zero-shot classification | https://github.com/openai/CLIP | https://www.bilibili.com/video/BV1NM411a7CP/ |
| S | SAM / SAM2 | promptable segmentation / image encoder / prompt encoder / mask decoder | https://github.com/facebookresearch/segment-anything | https://www.bilibili.com/video/BV1Cv4y1E7ho/ |
| S | Grounding DINO | text-conditioned open-set detection / grounding | https://github.com/IDEA-Research/GroundingDINO | https://www.bilibili.com/video/BV1rjgBzHEBW/ |
| A | DINOv2 / DINOv3 | self-supervised visual foundation features / dense features | https://github.com/facebookresearch/dinov3 | https://www.bilibili.com/video/BV1s7JCzbETY/ |
| A | BLIP-2 | frozen vision encoder + Q-Former + LLM | https://github.com/salesforce/LAVIS | https://www.bilibili.com/video/BV18u4y137ZV/ |
| A | LLaVA | vision encoder + projector + LLM / visual instruction tuning | https://github.com/haotian-liu/LLaVA | https://www.bilibili.com/video/BV1nw4m1S7nZ/ |
| A | Qwen2.5-VL | dynamic vision input / MRoPE / grounding / video | https://github.com/QwenLM/Qwen2.5-VL | https://www.bilibili.com/video/BV1wnbGzbEdy/ |
| A | Qwen3-VL | multimodal reasoning / spatial grounding / visual agent / tool use | https://github.com/QwenLM/Qwen3-VL | https://www.bilibili.com/video/BV1Vx421m7r7?p=3 |

### 学模型的最低标准

不要停留在“知道名字”。

每个 S 级模型至少做到：

- [ ] 能手绘结构；
- [ ] 能说清楚输入输出；
- [ ] 能解释核心创新；
- [ ] 能读懂 forward；
- [ ] 能跑官方 inference；
- [ ] 能替换自己的数据；
- [ ] 能解释 loss；
- [ ] 能解释主要评价指标；
- [ ] 能分析至少一个失败案例。

---

# 5. 必读论文：通用 CV / Foundation Model

> 以下论文均有公开代码或成熟公开实现。

---

## 5.1 Deep Residual Learning for Image Recognition — ResNet

- **Venue**：CVPR 2016
- **Paper**：https://arxiv.org/abs/1512.03385
- **Code/Implementation**：https://github.com/pytorch/vision
- **必须学会**：
  - residual learning；
  - shortcut connection；
  - degradation problem；
  - ResNet-18/50 的区别；
  - 为什么 ResNet 长期作为遥感 backbone。
- **实践**：用 ResNet-18 在 EuroSAT / NWPU-RESISC45 做分类。

---

## 5.2 U-Net: Convolutional Networks for Biomedical Image Segmentation

- **Paper**：https://arxiv.org/abs/1505.04597
- **Code**：https://github.com/milesial/Pytorch-UNet
- **必须学会**：
  - encoder-decoder；
  - skip connection；
  - dense prediction；
  - segmentation loss。
- **实践**：在 LoveDA / Potsdam 做最基础语义分割。

---

## 5.3 An Image is Worth 16×16 Words — Vision Transformer

- **Paper**：https://arxiv.org/abs/2010.11929
- **Official Code**：https://github.com/google-research/vision_transformer
- **必须学会**：
  - patch embedding；
  - positional embedding；
  - self-attention；
  - class token；
  - Transformer 为什么能替代 CNN backbone。

---

## 5.4 Swin Transformer

- **Paper**：https://arxiv.org/abs/2103.14030
- **Official Code**：https://github.com/microsoft/Swin-Transformer
- **必须学会**：
  - local window；
  - shifted window；
  - hierarchical representation；
  - 为什么 Swin 特别适合检测/分割。

---

## 5.5 End-to-End Object Detection with Transformers — DETR

- **Paper**：https://arxiv.org/abs/2005.12872
- **Official Code**：https://github.com/facebookresearch/detr
- **必须学会**：
  - object query；
  - bipartite/Hungarian matching；
  - set prediction；
  - 为什么不需要传统 anchor + NMS 流程。

---

## 5.6 Masked-attention Mask Transformer for Universal Image Segmentation — Mask2Former

- **Venue**：CVPR 2022
- **Paper**：https://arxiv.org/abs/2112.01527
- **Official Code**：https://github.com/facebookresearch/Mask2Former
- **必须学会**：
  - mask classification；
  - masked attention；
  - semantic / instance / panoptic segmentation 统一思路。

---

## 5.7 DINOv3

- **Paper**：https://arxiv.org/abs/2508.10104
- **Official Code**：https://github.com/facebookresearch/dinov3
- **必须学会**：
  - self-supervised visual representation；
  - frozen backbone；
  - dense feature；
  - linear probing；
  - satellite-pretrained backbone 的意义。
- **特别注意**：DINOv3 官方同时提供面向卫星数据训练的模型，是 2025–2026 视觉基础模型研究中值得重点跟踪的方向。

---

# 6. 必读论文：遥感经典任务

---

## 6.1 Oriented R-CNN for Object Detection

- **Venue**：ICCV 2021
- **Paper**：https://openaccess.thecvf.com/content/ICCV2021/html/Xie_Oriented_R-CNN_for_Object_Detection_ICCV_2021_paper.html
- **Code**：https://github.com/jbwang1997/OBBDetection
- **重点**：
  - 遥感目标为什么经常需要 OBB；
  - oriented proposal；
  - angle representation；
  - DOTA protocol。
- **实践**：DOTA / HRSC2016。

---

## 6.2 Remote Sensing Image Change Detection with Transformers — BIT

- **Venue**：IEEE TGRS
- **Paper**：https://arxiv.org/abs/2103.00208
- **Official Code**：https://github.com/justchenhao/BIT_CD
- **重点**：
  - bi-temporal image；
  - semantic token；
  - temporal interaction；
  - change map。
- **实践**：LEVIR-CD。

---

## 6.3 ChangeFormer

- **Paper**：https://arxiv.org/abs/2201.01293
- **Official Code**：https://github.com/wgcban/ChangeFormer
- **重点**：
  - Siamese Transformer；
  - multi-scale feature difference；
  - change detection decoder。
- **实践**：LEVIR-CD / DSIFN-CD。

---

# 7. 必读论文：遥感基础模型 / 自监督 / 多传感器

---

## 7.1 SatMAE

- **Venue**：NeurIPS 2022
- **Paper**：https://arxiv.org/abs/2207.08051
- **Official Code**：https://github.com/sustainlab-group/SatMAE
- **重点**：
  - masked autoencoder；
  - temporal satellite imagery；
  - multispectral band grouping；
  - 遥感预训练与自然图像预训练的差异。

---

## 7.2 Scale-MAE

- **Venue**：ICCV 2023
- **Paper**：https://arxiv.org/abs/2212.14532
- **Code**：https://github.com/bair-climate-initiative/scale-mae
- **重点**：
  - geospatial scale；
  - GSD；
  - scale-aware representation。
- **理解问题**：
  - 为什么同一“building”在不同 GSD 下像素尺度完全不同？

---

## 7.3 CROMA

- **Venue**：NeurIPS 2023
- **Paper**：https://arxiv.org/abs/2311.00566
- **Official Code**：https://github.com/antofuller/CROMA
- **重点**：
  - SAR + optical；
  - contrastive learning；
  - masked autoencoder；
  - cross-modal representation；
  - multi-sensor foundation model。

---

## 7.4 DeCUR

- **Venue**：ECCV 2024 Oral
- **Paper**：https://arxiv.org/abs/2309.05300
- **Official Code**：https://github.com/zhu-xlab/DeCUR
- **重点**：
  - common representation；
  - modality-unique representation；
  - SAR-optical self-supervised learning；
  - modality missing。

---

## 7.5 SAMRS

- **Venue**：NeurIPS 2023 Datasets & Benchmarks
- **Paper**：https://arxiv.org/abs/2305.02034
- **Official Code**：https://github.com/ViTAE-Transformer/SAMRS
- **重点**：
  - SAM 如何用于遥感数据自动构建；
  - data-centric AI；
  - large-scale remote sensing segmentation dataset；
  - pseudo-label / automatic annotation pipeline。

---

# 8. 必读论文：CLIP / 开放词汇 / 遥感 VLM

---

## 8.1 Learning Transferable Visual Models From Natural Language Supervision — CLIP

- **Paper**：https://arxiv.org/abs/2103.00020
- **Official Code**：https://github.com/openai/CLIP
- **重点**：
  - image encoder；
  - text encoder；
  - contrastive loss；
  - zero-shot classifier；
  - prompt template；
  - similarity logits。

> 如果 CLIP 没读懂，不建议直接做 RemoteCLIP / open-vocabulary segmentation。

---

## 8.2 Grounding DINO

- **Venue**：ECCV 2024
- **Paper**：https://arxiv.org/abs/2303.05499
- **Official Code**：https://github.com/IDEA-Research/GroundingDINO
- **重点**：
  - text-conditioned detector；
  - phrase grounding；
  - open-set detection；
  - detector 与语言模型如何融合。

---

## 8.3 Segment Anything

- **Paper**：https://arxiv.org/abs/2304.02643
- **Official Code**：https://github.com/facebookresearch/segment-anything
- **重点**：
  - promptable segmentation；
  - prompt encoder；
  - mask decoder；
  - data engine；
  - zero-shot transfer。
- **扩展**：SAM2  
  https://github.com/facebookresearch/segment-anything-2

---

## 8.4 RemoteCLIP

- **Venue**：IEEE TGRS 2024
- **Paper**：https://arxiv.org/abs/2306.11029
- **Official Code**：https://github.com/ChenDelong1999/RemoteCLIP
- **重点**：
  - domain-specific CLIP；
  - 遥感图文对构建；
  - zero-shot classification；
  - retrieval；
  - prompt sensitivity。

---

## 8.5 RS5M and GeoRSCLIP

- **Venue**：IEEE TGRS 2024
- **Paper**：https://arxiv.org/abs/2306.11300
- **Official Code/Data**：https://github.com/om-ai-lab/RS5M
- **重点**：
  - 5M image-text dataset；
  - domain VLM；
  - PEFT；
  - image-text retrieval / zero-shot classification / localization。

---

## 8.6 SegEarth-OV

- **Venue**：CVPR 2025 Oral
- **Paper**：https://arxiv.org/abs/2410.01768
- **Official Code**：https://github.com/likyoo/SegEarth-OV
- **重点**：
  - training-free open-vocabulary semantic segmentation；
  - CLIP patch token；
  - spatial upsampling；
  - global bias；
  - remote sensing OVSS protocol。

> 对想做 **开放词汇遥感语义分割** 的同学，这是必须精读并跑通的代码库。

---

# 9. 必读论文：通用 MLLM → 遥感 MLLM

---

## 9.1 BLIP-2

- **Paper**：https://arxiv.org/abs/2301.12597
- **Official Code**：https://github.com/salesforce/LAVIS
- **重点**：
  - frozen image encoder；
  - frozen LLM；
  - Q-Former；
  - bootstrapping。

---

## 9.2 Visual Instruction Tuning — LLaVA

- **Venue**：NeurIPS 2023 Oral
- **Paper**：https://arxiv.org/abs/2304.08485
- **Official Code**：https://github.com/haotian-liu/LLaVA
- **重点**：
  - visual instruction tuning；
  - vision encoder；
  - projector；
  - LLM；
  - instruction dataset；
  - 两阶段训练。

---

## 9.3 RSGPT

- **Paper**：https://arxiv.org/abs/2307.15266
- **Code**：https://github.com/Lavender105/RSGPT
- **重点**：
  - RS caption；
  - RS VQA；
  - high-quality instruction data；
  - remote sensing VLM benchmark。

---

## 9.4 GeoChat

- **Venue**：CVPR 2024
- **Paper**：https://arxiv.org/abs/2311.15826
- **Official Code**：https://github.com/mbzuai-oryx/GeoChat
- **重点**：
  - high-resolution RS MLLM；
  - region-level conversation；
  - visual grounding；
  - referring object detection；
  - LLaVA-based RS specialization。

---

## 9.5 EarthGPT

- **Venue**：IEEE TGRS 2024
- **Paper**：https://arxiv.org/abs/2401.16822
- **Official Code**：https://github.com/wivizhang/EarthGPT
- **重点**：
  - optical / SAR / infrared unified understanding；
  - multi-sensor；
  - multi-task instruction tuning；
  - MMRS-1M。

---

## 9.6 LHRS-Bot

- **Venue**：ECCV 2024
- **Paper**：https://arxiv.org/abs/2402.02544
- **Official Code**：https://github.com/NJU-LHRS/LHRS-Bot
- **重点**：
  - volunteered geographic information (VGI)；
  - RS instruction dataset；
  - multi-level vision-language alignment；
  - remote sensing reasoning。

---

## 9.7 RemoteSAM

- **Venue**：ACM Multimedia 2025 Oral
- **Paper**：https://arxiv.org/abs/2505.18022
- **Official Code**：https://github.com/1e12Leon/RemoteSAM
- **重点**：
  - unified EO perception；
  - referring expression segmentation；
  - image-text-mask data engine；
  - classification / detection / segmentation / grounding unified interface。

---

# 10. 必读论文：Reasoning / Agent

---

## 10.1 ReAct: Synergizing Reasoning and Acting in Language Models

- **Venue**：ICLR 2023
- **Paper**：https://arxiv.org/abs/2210.03629
- **Official Code**：https://github.com/ysymyth/ReAct
- **重点**：
  - Thought → Action → Observation；
  - reasoning 与 acting 的结合；
  - tool-use agent 的基本范式。

> 想研究 Agent，ReAct 是概念地基。

---

## 10.2 RemoteReasoner

- **Venue**：AAAI 2026
- **Paper**：https://arxiv.org/abs/2507.19280
- **Official Code**：https://github.com/1e12Leon/RemoteReasoner
- **重点**：
  - geospatial reasoning；
  - MLLM；
  - reinforcement learning；
  - object / region / pixel multi-granularity reasoning；
  - unseen task generalization。

---

## 10.3 RemoteAgent

- **Paper**：https://arxiv.org/abs/2604.07765
- **Official Code**：https://github.com/1e12Leon/RemoteAgent
- **重点**：
  - vague human intent；
  - task routing；
  - intrinsic vs. extrinsic capability；
  - dense prediction tool delegation；
  - reinforcement fine-tuning；
  - Model Context Protocol；
  - Agentic Earth Observation。

> 这是理解“未来遥感系统为什么不再只是一个单模型”的关键论文之一。

---

# 11. 推荐了解的工程型 Agent 项目

## GeoAgent

- **Code**：https://github.com/opengeos/GeoAgent
- **定位**：面向 geospatial Python / QGIS / live map / Earthdata 的多模态 Agent 工具层。
- **建议学习**：
  - tool metadata；
  - agent interface；
  - GIS 工具调用；
  - confirmation hook；
  - geospatial workflow orchestration。

它适合作为工程实践参考，但不要把“会调用 API”误认为“完成 Agent 科研”。

---

# 12. 2026 年值得重点关注的遥感 AI 研究方向

按“新生未来 2–3 年科研价值”建议关注：

| 方向 | 推荐指数 | 研究问题 |
|---|---:|---|
| 遥感基础模型 / Self-Supervised Foundation Model | ★★★★★ | 大规模无标注、跨传感器、跨 GSD、跨地域 |
| Open-Vocabulary Remote Sensing | ★★★★★ | unseen class、prompt、zero-shot、dense prediction |
| Training-Free / Parameter-Free Adaptation | ★★★★★ | 冻结基础模型如何适应遥感域 |
| Remote Sensing VLM | ★★★★★ | image-text alignment、retrieval、zero-shot |
| Remote Sensing MLLM | ★★★★★ | VQA、grounding、caption、reasoning |
| Multi-sensor MLLM | ★★★★★ | optical + SAR + IR + multispectral |
| Spatio-temporal VLM / MLLM | ★★★★★ | 多时相理解、变化解释、事件推理 |
| Referring / Grounded MLLM | ★★★★★ | 文本 → box/mask/region |
| Agentic Earth Observation | ★★★★★ | intent → planning → tool routing → result |
| RL for Geospatial Reasoning | ★★★★★ | reasoning autonomy、task transformation |
| MLLM + 专家视觉工具 | ★★★★★ | MLLM 负责理解，检测/分割模型负责精确空间预测 |
| Geospatial RAG | ★★★★☆ | 遥感图像 + GIS/地图/知识库联合检索 |
| Domain Generalization / TTA | ★★★★☆ | 跨城市、跨传感器、跨季节 |
| Robust Remote Sensing | ★★★★☆ | 云、雾、噪声、压缩、低分辨率 |
| Efficient / Edge EO Foundation Models | ★★★★☆ | 无人机、边缘设备、低显存部署 |
| Automatic Dataset Construction | ★★★★☆ | SAM/VLM/MLLM 自动标注与数据闭环 |

---

# 13. 数据集：至少知道这些名字

## 场景分类

- EuroSAT
- NWPU-RESISC45
- AID
- Million-AID

## 目标检测

- DOTA
- DIOR
- HRSC2016
- FAIR1M
- xView

## 语义分割

- LoveDA
- Potsdam
- Vaihingen
- OpenEarthMap
- iSAID
- UAVid
- DeepGlobe
- SpaceNet

## 变化检测

- LEVIR-CD
- WHU-CD
- DSIFN-CD
- S2Looking

## 图文 / VLM / MLLM

- RSICD
- RSITMD
- RS5M
- RSICap
- RSIEval
- VRSBench
- LHRS-Align
- LHRS-Instruct
- MMRS-1M

---

# 14. 指标必须真正理解

## 分类

```text
Accuracy
Precision
Recall
F1-score
Macro-F1
```

## 检测

```text
IoU
AP
mAP
AP50
AP75
Precision / Recall
```

## 分割

```text
Pixel Accuracy
IoU
mIoU
mAcc
Dice
F1
```

## 变化检测

```text
Precision
Recall
F1
IoU
OA
Kappa
```

## 图文检索

```text
Recall@1
Recall@5
Recall@10
mR
```

## VQA / MLLM

```text
Exact Match
Accuracy
LLM-based scoring
Grounding accuracy
IoU
task-specific benchmark score
```

> **任何实验结果都必须先确认 protocol、split、class mapping、resolution、checkpoint、pretraining data 是否一致，再谈 SOTA。**

---

# 15. 20 周学习计划：适合一个学期执行

## Week 1 — Linux / Git / Python

完成：

- Linux；
- Git；
- Conda；
- PyTorch 环境；
- GPU 使用；
- README 阅读。

**产出**：自己从 GitHub clone 一个 repo 并成功运行。

---

## Week 2 — OpenCV + 遥感基础

学习：

- image / pixel / band；
- CRS / GSD；
- multispectral / SAR；
- filter / edge / morphology；
- registration。

**产出**：双时相影像配准小实验。

---

## Week 3 — ResNet

- 精读 ResNet；
- 阅读 torchvision；
- EuroSAT 分类。

**产出**：训练日志 + confusion matrix + 1 页论文笔记。

---

## Week 4 — U-Net

- 精读 U-Net；
- LoveDA/Potsdam 二选一；
- 自己写 mIoU。

**产出**：baseline segmentation repo。

---

## Week 5 — ViT + Swin

- ViT 结构；
- self-attention；
- Swin window。

**产出**：CNN vs Transformer 对比笔记。

---

## Week 6 — YOLO + DETR

理解：

```text
anchor-based / anchor-free
one-stage / two-stage
NMS
object query
Hungarian matching
```

**产出**：在一个小型遥感检测数据集训练 detector。

---

## Week 7 — Mask2Former

目标：

- 搞清楚 mask classification；
- 搞清楚 semantic/instance/panoptic 的联系。

**产出**：方法结构图 + inference demo。

---

## Week 8 — 遥感旋转检测

精读：

- Oriented R-CNN；
- DOTA protocol。

**产出**：HBB vs OBB 对比。

---

## Week 9 — 变化检测

精读：

- BIT；
- ChangeFormer。

**产出**：LEVIR-CD baseline。

---

## Week 10 — 遥感基础模型

精读：

- SatMAE；
- Scale-MAE；
- CROMA。

**产出**：写一份“自然图像预训练为什么不能完全替代遥感预训练”的 2 页报告。

---

## Week 11 — DINOv3

理解：

- self-supervised feature；
- frozen backbone；
- linear probing；
- dense feature。

**产出**：使用冻结特征完成一个小分类/分割实验。

---

## Week 12 — CLIP + RemoteCLIP

目标：

- CLIP zero-shot classification；
- prompt template；
- RemoteCLIP inference。

**产出**：同一遥感数据集比较 CLIP 与 RemoteCLIP。

---

## Week 13 — SAM + Grounding DINO

完成：

```text
text → Grounding DINO box
box → SAM mask
```

**产出**：一个自动目标检测+分割 demo。

---

## Week 14 — SegEarth-OV

目标：

- 跑通 open-vocabulary semantic segmentation；
- 理解 CLIP dense feature；
- 理解 training-free protocol。

**产出**：至少在一个遥感 segmentation dataset 上完成 inference/evaluation。

---

## Week 15 — BLIP-2 + LLaVA

目标：

- 理解视觉 encoder 与 LLM 如何连接；
- instruction tuning。

**产出**：对一张遥感图片完成 caption / VQA demo。

---

## Week 16 — RSGPT / GeoChat

目标：

- 跑通至少一个遥感 MLLM；
- 分析 hallucination；
- 分析 grounding。

**产出**：20 个问题的人工评测表。

---

## Week 17 — EarthGPT / LHRS-Bot

重点：

- multi-sensor；
- VGI；
- RS-specific instruction tuning。

**产出**：整理“通用 MLLM vs 遥感 MLLM”对比表。

---

## Week 18 — Qwen3-VL

重点：

- visual reasoning；
- grounding；
- tool use；
- agent capability。

**产出**：尝试让 Qwen3-VL 对遥感图像输出结构化目标/区域信息。

---

## Week 19 — ReAct / RemoteReasoner

目标：

- 理解 agent loop；
- reasoning；
- RL-based geospatial reasoning。

**产出**：实现一个最简：

```text
Question
→ Thought
→ Tool Selection
→ Tool Result
→ Answer
```

---

## Week 20 — RemoteAgent + 小型科研 Proposal

阅读 RemoteAgent。

最终完成一份 3–5 页 proposal：

```text
1. Background
2. Problem
3. Existing Methods
4. Limitation
5. Proposed Idea
6. Dataset
7. Baseline
8. Evaluation
9. Expected Contribution
```

---

# 16. 新生必须完成的三个项目

---

## Project A：传统遥感 CV Baseline

任选：

```text
LoveDA semantic segmentation
Potsdam semantic segmentation
DOTA detection
LEVIR-CD change detection
```

要求：

- 能训练；
- 能测试；
- 能算指标；
- 能画预测图；
- 能更换 backbone；
- 能完成 ablation。

---

## Project B：Open-Vocabulary 遥感解译

建议：

```text
CLIP / RemoteCLIP
+
Grounding DINO / SAM
或
SegEarth-OV
```

目标：

- zero-shot；
- unseen category；
- prompt；
- open-vocabulary；
- frozen foundation model。

---

## Project C：Agentic EO Demo

实现最简单的多工具系统：

```text
用户：
“帮我找出这片区域中新出现的大型建筑。”

Agent：
1. 判断需要 change detection；
2. 调用 change detector；
3. 调用 detector / segmentor；
4. 统计区域；
5. 返回结构化结果和解释。
```

推荐工具池：

```text
scene classifier
object detector
semantic segmentor
change detector
Grounding DINO
SAM
RemoteCLIP
GIS / raster tool
```

> 这个项目的重点不是“套 LangChain”，而是理解：  
> **什么任务应该由 MLLM 自己完成，什么任务必须交给精确的视觉工具。**

---

# 17. 每篇论文必须使用统一笔记模板

```markdown
# Paper Title

## 1. Basic Information
- Venue:
- Year:
- Task:
- Code:

## 2. Problem
作者到底要解决什么问题？

## 3. Motivation
为什么已有方法不够好？

## 4. Core Idea
一句话概括方法。

## 5. Architecture
输入：
输出：
backbone：
关键模块：

## 6. Loss / Objective

## 7. Dataset

## 8. Metrics

## 9. Main Results

## 10. Ablation

## 11. Strengths

## 12. Weaknesses

## 13. What I Can Reuse

## 14. Code Mapping
论文模块 → 代码文件

## 15. My New Idea
至少写 3 条。
```

---

# 18. 跑代码时必须记录实验 Ledger

每一个实验都记录：

```text
Date
Git commit
Environment
GPU
Dataset
Split
Preprocessing
Checkpoint
Model
Config
Seed
Batch size
Learning rate
Epoch
Input resolution
Metric
Runtime
FPS
GPU memory
Result
Notes
```

科研最忌讳：

> “我记得上次好像跑到 68%。”

所有结果都必须可追溯。

---

# 19. 如何从“复现论文”进入“做科研”

新生最常见的错误是：

```text
加一个 attention
换一个 loss
换 backbone
涨 0.3%
= 创新
```

真正应该问：

### 1. Problem Innovation

有没有真实未解决问题？

例如：

- 模型跨城市失效；
- SAR/Optical 对齐困难；
- zero-shot 遥感分割边界差；
- MLLM 只能输出文本，不能精确输出 mask；
- Agent 不知道何时应该调用 detector；
- prompt 对遥感 open-vocabulary prediction 极其敏感；
- 多时相 MLLM 缺乏真正的时序推理。

### 2. Method Innovation

新方法是否直接针对问题？

### 3. Protocol Innovation

是否建立了以前没有认真评估的设置？

### 4. Data Innovation

是否构建新的高质量数据/benchmark？

---

# 20. 新生常见误区

## 错误 1：直接从大模型开始

如果连：

```text
IoU
mIoU
backbone
feature pyramid
query
self-attention
cross-attention
```

都解释不清楚，不建议直接做 MLLM。

---

## 错误 2：只看中文视频

正确顺序：

```text
B站理解背景
→ 论文英文原文
→ 代码
→ 自己运行
→ 自己修改
```

---

## 错误 3：只追 SOTA 数字

遥感实验经常存在：

- split 不同；
- crop size 不同；
- class mapping 不同；
- pretraining data 不同；
- TTA 不同；
- resolution 不同；
- external data 不同。

不能只比较一个数字。

---

## 错误 4：一上来训练十几 B MLLM

新生第一阶段更应该研究：

```text
frozen model
LoRA
PEFT
linear probing
prompt
tool use
training-free
small-scale evaluation
```

---

## 错误 5：Agent = 调几个 API

科研型 Agent 至少要研究：

```text
intent understanding
task decomposition
routing
tool selection
reasoning
uncertainty
memory
cost
failure recovery
evaluation
```

---

# 21. 建议达到的“入门合格线”

完成这份路线后，应能独立回答：

### CV

- ResNet 为什么有效？
- U-Net skip connection 有什么作用？
- ViT 为什么要 patch？
- Swin 为什么适合 dense prediction？
- DETR object query 是什么？
- Mask2Former 为什么能统一 segmentation？

### 遥感

- GSD 是什么？
- 为什么遥感小目标困难？
- 为什么 DOTA 使用旋转框？
- 光学与 SAR 有什么本质差异？
- 为什么变化检测必须考虑配准？
- 为什么跨城市/跨传感器容易 domain shift？

### VLM

- CLIP 怎么训练？
- zero-shot classifier 怎么构造？
- prompt 为什么影响结果？
- RemoteCLIP 为什么比自然图像 CLIP 更适合遥感？

### Foundation Model

- DINO 和 CLIP 学到的 representation 有什么区别？
- SAM 为什么叫 promptable segmentation？
- foundation model 为什么不等于“万能模型”？

### MLLM

- LLaVA 的 vision encoder、projector、LLM 分别做什么？
- instruction tuning 是什么？
- grounding 与普通 VQA 有什么区别？
- 为什么 MLLM 不擅长精确像素级输出？

### Agent

- ReAct 是什么？
- tool use 是什么？
- planner / executor 有什么区别？
- Agent 为什么需要 routing？
- 什么任务应由 MLLM 内部完成？
- 什么任务必须委托 detector / segmentor / GIS tool？

---

# 22. 最终建议的研究成长路线

```text
阶段 1：会跑代码
        ↓
阶段 2：会复现实验
        ↓
阶段 3：会读论文
        ↓
阶段 4：会分析 failure case
        ↓
阶段 5：会提出 research question
        ↓
阶段 6：会设计 baseline + ablation
        ↓
阶段 7：会构建完整实验 protocol
        ↓
阶段 8：会写论文
```

不要把目标定成：

> “三个月学会所有大模型。”

应该定成：

> **“六个月后，我能够独立读懂一篇遥感 AI 论文、跑通代码、复现实验、定位问题，并提出一个可验证的改进。”**

---

# 23. 最推荐的新生第一批精读顺序

如果时间有限，优先读以下 **15 篇**：

```text
01 ResNet
02 U-Net
03 ViT
04 Swin Transformer
05 DETR
06 Mask2Former
07 DINOv3
08 CLIP
09 SAM
10 Grounding DINO
11 RemoteCLIP
12 SegEarth-OV
13 LLaVA
14 GeoChat
15 RemoteAgent
```

变化检测方向额外：

```text
BIT
ChangeFormer
```

多传感器方向额外：

```text
SatMAE
CROMA
DeCUR
EarthGPT
```

MLLM 方向额外：

```text
BLIP-2
RSGPT
LHRS-Bot
RemoteSAM
RemoteReasoner
```

---

# 24. 给新生的一句话

> **不要追着模型名字跑。先把一个完整任务从数据、模型、训练、推理、指标、复现到失败分析做通。之后再进入 VLM、MLLM 和 Agent，你会发现所有前沿工作其实都建立在这些基本功之上。**
