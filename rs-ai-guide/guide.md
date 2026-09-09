# 遥感图像解译 × 人工智能科研学习导航

> 面向刚进入遥感图像解译科研的新生。  
> 目标不是把模型名字全部记住，而是尽快建立几条连续的技术主线，之后能够直接阅读当前 CV、Earth Foundation Model、VLM、MLLM 与 Agent 方向的论文。  
> **更新：2026-09。**

---

# 1. 先熟悉这些专业英语

阅读论文时不需要逐词翻译，但下面这些术语应当能够直接理解。

## 1.1 遥感与 Earth Observation

| English | 中文 | English | 中文 |
|---|---|---|---|
| remote sensing (RS) | 遥感 | Earth observation (EO) | 地球观测 |
| satellite imagery | 卫星影像 | aerial imagery | 航空/航拍影像 |
| optical imagery | 光学影像 | SAR | 合成孔径雷达 |
| multispectral | 多光谱 | hyperspectral | 高光谱 |
| spatial resolution | 空间分辨率 | spectral resolution | 光谱分辨率 |
| temporal resolution | 时间分辨率 | GSD | 地面采样距离 |
| revisit | 重访 | multi-temporal | 多时相 |
| georeferencing | 地理配准 | co-registration | 共配准 |
| orthorectification | 正射校正 | CRS | 坐标参考系统 |
| raster | 栅格 | vector | 矢量 |
| land cover | 地表覆盖 | land use | 土地利用 |
| cross-sensor | 跨传感器 | geo-context | 地理上下文 |
| cloud cover | 云覆盖 | speckle noise | SAR 斑点噪声 |

## 1.2 视觉任务

| English | 中文 |
|---|---|
| scene classification | 场景分类 |
| object detection | 目标检测 |
| oriented object detection | 旋转目标检测 |
| semantic segmentation | 语义分割 |
| instance segmentation | 实例分割 |
| panoptic segmentation | 全景分割 |
| change detection | 变化检测 |
| visual grounding | 视觉定位 |
| referring segmentation | 指代表达分割 |
| image captioning | 图像描述 |
| visual question answering (VQA) | 视觉问答 |
| image-text retrieval | 图文检索 |
| dense prediction | 密集预测 |
| domain shift | 域偏移 |
| domain adaptation | 域适应 |
| domain generalization | 域泛化 |
| test-time adaptation (TTA) | 测试时自适应 |
| robustness | 鲁棒性 |

## 1.3 Transformer / VLM / MLLM / Agent

| English | 中文 |
|---|---|
| backbone | 主干网络 |
| encoder / decoder | 编码器 / 解码器 |
| token | 表征单元 |
| query | 查询向量 |
| self-attention | 自注意力 |
| cross-attention | 交叉注意力 |
| positional embedding | 位置编码 |
| pretraining | 预训练 |
| fine-tuning | 微调 |
| self-supervised learning | 自监督学习 |
| contrastive learning | 对比学习 |
| masked image modeling | 掩码图像建模 |
| distillation | 蒸馏 |
| PEFT / LoRA | 参数高效微调 / 低秩适配 |
| vision-language model (VLM) | 视觉语言模型 |
| multimodal large language model (MLLM) | 多模态大语言模型 |
| image-text alignment | 图文对齐 |
| zero-shot | 零样本 |
| open-vocabulary | 开放词汇 |
| open-set | 开放集 |
| prompt | 提示词 |
| grounding | 将语言定位到图像实体或区域 |
| instruction tuning | 指令微调 |
| hallucination | 幻觉 |
| chain-of-thought (CoT) | 思维链 |
| reinforcement learning (RL) | 强化学习 |
| agent | 智能体 |
| tool calling | 工具调用 |
| routing | 路由 |
| planner / executor | 规划器 / 执行器 |
| trajectory | 执行轨迹 |
| Model Context Protocol (MCP) | 模型上下文协议 |

---

# 2. 从 ViT 到 CLIP：先建立现代 CV 的共同语言

传统 CNN、ResNet、U-Net、FPN、YOLO 应当知道基本结构和用途，但如果目标是尽快进入当前研究，建议优先把下面五篇连起来看。

## 2.1 ViT

**An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale**

- Paper: https://arxiv.org/abs/2010.11929
- Code: https://github.com/google-research/vision_transformer
- Bilibili: https://www.bilibili.com/video/BV1ge41137LV/

关注：

```text
Image
→ Patch
→ Token
→ Transformer Encoder
→ Prediction
```

看懂 patch embedding、self-attention、position embedding 即可。

---

## 2.2 Swin Transformer

**Swin Transformer: Hierarchical Vision Transformer using Shifted Windows**

- Paper: https://arxiv.org/abs/2103.14030
- Code: https://github.com/microsoft/Swin-Transformer
- Bilibili: https://www.bilibili.com/video/BV13L4y1475U/

关注：

- window attention；
- shifted window；
- hierarchical feature；
- multi-scale representation。

它把 Transformer 更自然地带入检测和分割。

---

## 2.3 DETR

**End-to-End Object Detection with Transformers**

- Paper: https://arxiv.org/abs/2005.12872
- Code: https://github.com/facebookresearch/detr
- Bilibili: https://www.bilibili.com/video/BV1T6421F7tR/

关注：

- object query；
- Hungarian matching；
- set prediction；
- decoder query 如何表示“一个待预测目标”。

很多后续 detector、segmentor、grounding model 都能看到这套思想。

---

## 2.4 Mask2Former

**Masked-attention Mask Transformer for Universal Image Segmentation**

- Paper: https://arxiv.org/abs/2112.01527
- Code: https://github.com/facebookresearch/Mask2Former
- Bilibili: https://www.bilibili.com/video/BV1EA22YnEY1/

关注：

- mask classification；
- masked attention；
- query-based segmentation；
- semantic / instance / panoptic segmentation 的统一。

---

## 2.5 CLIP

**Learning Transferable Visual Models From Natural Language Supervision**

- Paper: https://arxiv.org/abs/2103.00020
- Code: https://github.com/openai/CLIP
- Bilibili: https://www.bilibili.com/video/BV1NM411a7CP/

关注：

```text
Image Encoder ─┐
               ├→ Shared Semantic Space
Text Encoder ──┘
```

以及：

- contrastive learning；
- zero-shot classification；
- prompt template；
- cosine similarity；
- image-text alignment。

从这里开始，类别不再一定由固定分类头定义，而可以由自然语言定义。

---

# 3. 接着理解三套通用视觉能力

# 3.1 DINO 系列：视觉表征

建议从 DINOv2 的思想理解到 DINOv3。

- DINOv3 Paper: https://arxiv.org/abs/2508.10104
- Code: https://github.com/facebookresearch/dinov3
- Bilibili: https://www.bilibili.com/video/BV1s7JCzbETY/

关注：

- self-supervised representation；
- frozen backbone；
- dense feature；
- feature correspondence；
- linear probing / fine-tuning。

可以简单理解：

```text
DINO：强调视觉表征本身
CLIP：强调视觉与语言对齐
```

这两类特征现在都大量进入遥感研究。

---

# 3.2 SAM 系列：Promptable Segmentation

## SAM

**Segment Anything**

- Paper: https://arxiv.org/abs/2304.02643
- Code: https://github.com/facebookresearch/segment-anything

结构：

```text
Image Encoder
+ Prompt Encoder
+ Mask Decoder
```

首先理解为什么 segmentation 可以从固定类别预测变成 promptable segmentation。

## SAM 2

- Code: https://github.com/facebookresearch/sam2

在 SAM 基础上继续理解：

- image / video segmentation；
- memory；
- object tracking；
- prompt propagation。

## SAM 3 / SAM 3.1

- Paper: https://arxiv.org/abs/2511.16719
- Code: https://github.com/facebookresearch/sam3
- Bilibili: https://www.bilibili.com/video/BV1Px9aBPEft/

继续关注：

- text concept；
- text-conditioned detection；
- presence prediction；
- segmentation + tracking；
- open-vocabulary concept segmentation。

---

# 3.3 Grounding DINO：Text → Object

**Grounding DINO: Marrying DINO with Grounded Pre-Training for Open-Set Object Detection**

- Paper: https://arxiv.org/abs/2303.05499
- Code: https://github.com/IDEA-Research/GroundingDINO
- Bilibili: https://www.bilibili.com/video/BV1rjgBzHEBW/

关注：

```text
Text
 ↓
Grounding DINO
 ↓
Bounding Box
```

它与 SAM 组合后得到非常典型的现代视觉工具链：

```text
Text
 ↓
Grounding DINO
 ↓
Box
 ↓
SAM
 ↓
Mask
```

这个模式以后会直接延伸到 MLLM 和 Agent：

> 语言模型负责理解目标，专业视觉模型负责精确空间预测。

---

# 4. 从 VLM 到 MLLM：三类结构足够建立基础

## 4.1 BLIP-2

- Paper: https://arxiv.org/abs/2301.12597
- Code: https://github.com/salesforce/LAVIS
- Bilibili: https://www.bilibili.com/video/BV18u4y137ZV/

重点看 Q-Former 如何连接 frozen vision encoder 和 frozen LLM。

---

## 4.2 LLaVA

- Paper: https://arxiv.org/abs/2304.08485
- Code: https://github.com/haotian-liu/LLaVA
- Bilibili: https://www.bilibili.com/video/BV1nw4m1S7nZ/

理解最基本的 MLLM 结构：

```text
Vision Encoder
→ Projector
→ LLM
→ Response
```

再理解 visual instruction tuning。

---

## 4.3 Qwen2.5-VL / Qwen3-VL

- Qwen2.5-VL: https://github.com/QwenLM/Qwen2.5-VL
- Qwen3-VL: https://github.com/QwenLM/Qwen3-VL
- Bilibili（Qwen2.5-VL）: https://www.bilibili.com/video/BV1wnbGzbEdy/
- Bilibili（Qwen3-VL）: https://www.bilibili.com/video/BV1Vx421m7r7?p=3

观察现代 MLLM 的能力如何从：

```text
Caption / VQA
```

扩展到：

```text
Grounding
+ Spatial Reasoning
+ Video
+ Tool Use
+ Agent
```

---

# 5. 遥感主线一：Earth Foundation Model

这一方向不要把每个遥感预训练模型都读一遍。重点理解遥感基础模型的问题是如何一步步变化的。

## SatMAE — NeurIPS 2022

**SatMAE: Pre-training Transformers for Temporal and Multi-Spectral Satellite Imagery**

- Paper: https://arxiv.org/abs/2207.08051
- Code: https://github.com/sustainlab-group/SatMAE

从这里理解：

> MAE / ViT 到了遥感领域以后，为什么必须考虑 multispectral 和 temporal data？

---

## Scale-MAE — ICCV 2023

**Scale-MAE: A Scale-Aware Masked Autoencoder for Multiscale Geospatial Representation Learning**

- Paper: https://arxiv.org/abs/2212.14532
- Code: https://github.com/bair-climate-initiative/scale-mae

从这里理解 GSD 和真实地理尺度为什么不同于普通 resize。

---

## CROMA — NeurIPS 2023

**CROMA: Remote Sensing Representations with Contrastive Radar-Optical Masked Autoencoders**

- Paper: https://arxiv.org/abs/2311.00566
- Code: https://github.com/antofuller/CROMA

从这里理解：

```text
Optical
+
SAR
+
Contrastive Learning
+
Masked Modeling
```

以及空间对齐的多传感器数据为什么适合做自监督学习。

---

## SkySense — CVPR 2024

**SkySense: A Multi-Modal Remote Sensing Foundation Model Towards Universal Interpretation for Earth Observation Imagery**

- Paper: https://arxiv.org/abs/2312.10115
- Code: https://github.com/Jack-bo1220/SkySense

把前面的几个问题合在一起看：

```text
Optical + SAR
+ Temporal
+ Geo-context
```

这里开始能够明显看到 Earth Foundation Model 与普通 RGB foundation model 的差别。

---

## Galileo — ICML 2025

**Galileo: Learning Global & Local Features of Many Remote Sensing Modalities**

- Paper: https://arxiv.org/abs/2502.09356
- Code: https://github.com/nasaharvest/galileo

关注：

- multispectral；
- SAR；
- elevation；
- weather；
- temporal input；
- global / local features；
- flexible modality input。

它适合帮助理解“many modalities + many spatial scales”这一类统一 Earth representation。

---

## Copernicus-FM — ICCV 2025 Oral

**Towards a Unified Copernicus Foundation Model for Earth Vision**

- Code / Project: https://github.com/zhu-xlab/Copernicus-FM

建议重点看：

```text
Sentinel-1
Sentinel-2
Sentinel-3
Sentinel-5P
...
      ↓
Unified Copernicus Representation
```

它把研究范围从常见的 Sentinel-1/2 进一步扩展到 Copernicus 多任务、多圈层数据。

---

## TerraMind — ICCV 2025

**TerraMind: Large-Scale Generative Multimodality for Earth Observation**

- Paper: https://arxiv.org/abs/2504.11171
- Code: https://github.com/IBM/terramind

这里需要注意方向变化：

```text
Multi-modal Encoder
      ↓
Any-to-Any Generative Foundation Model
```

并理解它提出的 Thinking in Modalities：

```text
已知模态
→ 生成辅助模态
→ 帮助下游预测
```

---

## Prithvi-EO-2.0 — IEEE TGRS 2025

**Prithvi-EO-2.0: A Versatile Multitemporal Foundation Model for Earth Observation Applications**

- IBM / NASA
- Model / Resources: https://huggingface.co/ibm-nasa-geospatial
- TerraTorch: https://github.com/IBM/terratorch

关注：

- global HLS time series；
- temporal embedding；
- location embedding；
- land cover / crop / disaster / ecosystem applications。

它也是理解“基础模型如何真正进入 Earth science application”的一个入口。

---

## TESSERA — CVPR 2026

**TESSERA: Temporal Embeddings of Surface Spectra for Earth Representation and Analysis**

- Paper: https://arxiv.org/abs/2506.20380
- Code: https://github.com/ucam-eo/tessera

重点看：

```text
长期 Sentinel-1/2 observations
        ↓
Spectral-temporal representation
        ↓
Pixel-wise Earth embedding
```

它把 time-series information 放到了更加中心的位置。

---

## PANGAEA — IEEE Geoscience and Remote Sensing Magazine 2026

**PANGAEA: Assessing Geospatial Foundation Models Capabilities through a Global and Inclusive Benchmark**

- Code: https://github.com/VMarsocci/pangaea-bench

读 Earth Foundation Model 时建议同时看 PANGAEA。

原因很简单：

> 不同论文使用不同数据集、不同 fine-tuning protocol 和不同 sensor 时，单独比较论文主表往往无法说明模型的整体能力。

PANGAEA 提供统一的任务、传感器、分辨率、时间与地理覆盖评测框架，可以帮助建立更正确的 GFM 比较方式。

---

# 6. 遥感主线二：Vision-Language → Open World

# 6.1 RemoteCLIP — IEEE TGRS 2024

**RemoteCLIP: A Vision Language Foundation Model for Remote Sensing**

- Paper: https://arxiv.org/abs/2306.11029
- Code: https://github.com/ChenDelong1999/RemoteCLIP

把 CLIP 带到遥感域。

重点看：

- remote-sensing image-text pair；
- domain gap；
- zero-shot classification；
- image-text retrieval。

---

# 6.2 GeoChat — CVPR 2024

**GeoChat: Grounded Large Vision-Language Model for Remote Sensing**

- Paper: https://arxiv.org/abs/2311.15826
- Code: https://github.com/mbzuai-oryx/GeoChat

从这里进入遥感 MLLM：

```text
Remote Sensing Image
+ Instruction
→ Conversation
+ Grounding
```

重点看高分辨率、小目标和 region-level understanding。

---

# 6.3 SegEarth-OV — CVPR 2025 Oral

**SegEarth-OV: Towards Training-Free Open-Vocabulary Segmentation for Remote Sensing Images**

- Paper: https://arxiv.org/abs/2410.01768
- Code: https://github.com/likyoo/SegEarth-OV

它连接了：

```text
CLIP
→ Dense Feature
→ Open Vocabulary
→ Remote-Sensing Semantic Segmentation
```

重点理解：

- training-free OVSS；
- CLIP patch feature；
- spatial detail recovery；
- global bias。

---

# 6.4 SkySense-O — CVPR 2025

**SkySense-O: Towards Open-World Remote Sensing Interpretation with Vision-Centric Visual-Language Modeling**

- Paper: https://arxiv.org/abs/2503.16608
- Code: https://github.com/zqcrafts/SkySense-O

这里研究的问题已经不仅是一个 segmentation benchmark，而是：

```text
Vision-Language Representation
→ Open-category Recognition
→ Localization
→ Open-world Interpretation
```

可以和 RemoteCLIP、SegEarth-OV 连起来看。

---

# 6.5 EarthDial — CVPR 2025

**EarthDial: Turning Multi-sensory Earth Observations to Interactive Dialogues**

- Paper: https://arxiv.org/abs/2412.15190
- Code: https://github.com/hiyamdebary/EarthDial

它把遥感 MLLM 扩展到：

```text
RGB
+ SAR
+ Multispectral
+ Multi-resolution
+ Multi-temporal
→ Interactive Dialogue
```

覆盖 classification、detection、caption、VQA、reasoning、grounding 和 temporal analysis。

---

# 7. 遥感主线三：Grounded Reasoning → Agent

这一阶段要关注的重点已经不是“模型能不能输出一段自然语言”，而是：

> 模型是否真的定位到了正确区域、是否正确使用多时相与多传感器信息、是否知道什么时候需要调用外部工具。

---

## TerraScope — CVPR 2026

**TerraScope: Pixel-Grounded Visual Reasoning for Earth Observation**

- Project / Paper / Code: https://shuyansy.github.io/terrascope/

核心变化：

```text
Question
→ Reasoning
→ Answer
```

变成：

```text
Question
→ Reasoning
→ Pixel-level Visual Evidence
→ Answer
```

它同时考虑：

- optical / SAR；
- multi-temporal reasoning；
- pixel mask；
- response accuracy；
- spatial grounding quality。

这代表一个很值得关注的趋势：

> MLLM 的 reasoning 需要能够被视觉证据验证。

---

## RemoteReasoner — AAAI 2026

**RemoteReasoner: Towards Unifying Geospatial Reasoning Workflow**

- Paper: https://arxiv.org/abs/2507.19280
- Code: https://github.com/1e12Leon/RemoteReasoner

关注：

```text
Instruction
→ Reasoning
→ Task Transformation
→ Object / Region / Pixel-level Output
```

以及 RL 如何用于 geospatial reasoning。

这篇可以作为从 MLLM 进入 reasoning workflow 的衔接阅读。

---

## Earth-Agent — ICLR 2026

**Earth-Agent: Unlocking the Full Landscape of Earth Observation with Agents**

- Code: https://github.com/opendatalab/Earth-Agent

它开始把 EO 问题明确组织成：

```text
Goal
→ Reasoning
→ Tool Selection
→ Tool Execution
→ Observation
→ Next Action
→ Result
```

工具覆盖：

```text
Index
Inversion
Perception
Analysis
Statistics
```

阅读时重点关注的不是工具数量，而是：

- task decomposition；
- tool selection；
- parameter prediction；
- trajectory evaluation；
- result evaluation。

---

## OpenEarthAgent — ECCV 2026

**OpenEarthAgent: A Unified Framework for Tool-Augmented Geospatial Agents**

- Paper: https://arxiv.org/abs/2602.17665

这条线进一步把：

```text
Optical / SAR
GIS
Spectral Index
Detection
Segmentation
Change Detection
```

组织到统一的 geospatial agent workflow 中。

到这里，新生应该能够理解：

> Agentic EO 并不是“让 LLM 调几个 API”，而是让模型在地理空间任务中完成任务理解、工具路由、执行、反馈和结果验证。

---

# 8. 把这些论文连起来看

如果只看单篇论文，很容易变成模型名收藏。更建议记住下面四条关系。

## 8.1 视觉模型主线

```text
ViT
→ Swin
→ DETR / Mask2Former
→ DINO
→ SAM / Grounding DINO
```

问题从“如何提取视觉特征”逐渐走向“如何用 query / prompt 操作视觉对象”。

---

## 8.2 Vision-Language 主线

```text
CLIP
→ Grounding DINO
→ LLaVA / Qwen-VL
→ GeoChat / EarthDial
→ TerraScope
```

问题从：

```text
Image 和 Text 能否对齐？
```

逐渐走向：

```text
语言能否准确找到对象？
模型能否进行空间推理？
推理是否有可验证的视觉证据？
```

---

## 8.3 Earth Foundation Model 主线

```text
SatMAE
→ Scale-MAE / CROMA
→ SkySense
→ Galileo / Copernicus-FM
→ TerraMind / Prithvi-EO-2.0
→ TESSERA
```

问题从：

```text
遥感图像如何做自监督预训练？
```

扩展为：

```text
不同 resolution
不同 GSD
不同 sensor
不同 spectral band
不同 temporal sequence
不同 geography
如何进入同一个 Earth representation？
```

---

## 8.4 Open World → Agent 主线

```text
RemoteCLIP
→ SegEarth-OV / SkySense-O
→ SAM3
→ MLLM Grounding
→ TerraScope / RemoteReasoner
→ Earth-Agent / OpenEarthAgent
```

任务定义开始从：

```text
固定类别预测
```

转向：

```text
自然语言表达需求
→ 理解目标
→ 搜索 / 定位
→ 精确感知
→ 调用专业工具
→ 返回可验证结果
```

---

# 9. 根据准备研究的方向选择阅读入口

这不是固定学习计划，只是减少无效阅读。

## 如果准备做传统遥感检测 / 分割

先看：

```text
ViT
Swin
DETR
Mask2Former
DINO
SAM
```

然后再回到具体的 oriented detection、semantic segmentation、change detection 文献。

---

## 如果准备做 Earth Foundation Model

建议围绕：

```text
SatMAE
Scale-MAE
CROMA
SkySense
Galileo
Copernicus-FM
TerraMind
Prithvi-EO-2.0
TESSERA
PANGAEA
```

重点始终放在：

```text
modality
resolution
scale
temporal
geography
pretraining objective
transfer protocol
```

而不是只看参数量。

---

## 如果准备做 Open-Vocabulary 遥感解译

先连起来看：

```text
CLIP
Grounding DINO
SAM
RemoteCLIP
SegEarth-OV
SkySense-O
SAM3
```

这样能够比较快理解：

```text
text embedding
→ image-text alignment
→ open-set detection
→ promptable segmentation
→ open-vocabulary dense prediction
```

---

## 如果准备做 VLM / MLLM

先看：

```text
CLIP
BLIP-2
LLaVA
Qwen-VL
GeoChat
EarthDial
TerraScope
```

重点关注：

```text
视觉信息如何进入 LLM？
高分辨率图像如何处理？
小目标如何定位？
多传感器如何输入？
多时相如何表达？
答案如何与空间证据对齐？
```

---

## 如果准备做 Agentic EO

先理解：

```text
MLLM
Grounding
SAM / Detector
GIS / Spectral Tools
```

再看：

```text
TerraScope
RemoteReasoner
Earth-Agent
OpenEarthAgent
```

Agent 论文里应该特别留意：

```text
Task decomposition
Routing
Tool schema
Tool selection
Tool parameter
Observation
Memory
Trajectory
Failure recovery
Evaluation
```

---

# 10. 阅读论文时只需要持续问几个问题

不必把每篇论文整理成很长的模板，但至少能回答：

1. 这篇论文到底改变了哪个问题？
2. 输入和输出是什么？
3. 模型哪些部分是 frozen，哪些部分参与训练？
4. 用到了哪些 external model / external data？
5. 创新发生在 representation、architecture、training、inference、data 还是 benchmark？
6. 和最接近的方法相比，真正不同的地方是什么？
7. 评测协议是否一致？
8. 最关键的 ablation 在证明什么？
9. 代码中的核心 module 在哪里？
10. 这个方法在哪些场景仍然会失败？

---

# 11. 建议长期关注的代码与资料入口

## 通用视觉

- Hugging Face Transformers  
  https://github.com/huggingface/transformers

- OpenMMLab  
  https://github.com/open-mmlab

## Earth Foundation Model

- PANGAEA  
  https://github.com/VMarsocci/pangaea-bench

- IBM TerraTorch  
  https://github.com/IBM/terratorch

- Awesome Remote Sensing Foundation Models  
  https://github.com/Jack-bo1220/Awesome-Remote-Sensing-Foundation-Models

## 遥感 MLLM

- Awesome Remote Sensing Multimodal Large Language Model  
  https://github.com/ZhanYang-nwpu/Awesome-Remote-Sensing-Multimodal-Large-Language-Model

## Geo-Agent

- Awesome Geo-Agent  
  https://github.com/ChristmasLatte/Awesome-Geo-Agent

---

# 结语

快速进入这个方向，不需要先把所有遥感算法和所有大模型都学一遍。

更有效的方法是先建立几个连接：

```text
ViT → Transformer Vision
CLIP → Vision-Language
DINO → Visual Representation
Grounding DINO → Text-to-Object
SAM → Prompt-to-Mask
LLaVA / Qwen-VL → Multimodal Reasoning
```

然后理解遥感为什么会增加新的变量：

```text
GSD
Scale
Spectral Band
SAR
Multi-sensor
Multi-temporal
Geo-context
High Resolution
Small Object
```

最后再去看当前研究如何把这些问题推向：

```text
Earth Foundation Model
Open-Vocabulary Perception
Grounded MLLM
Geospatial Reasoning
Agentic Earth Observation
```

这样以后出现新的模型时，就不需要重新从模型名字开始学，而能够直接判断它属于哪条技术主线、解决的是哪一个尚未解决的问题。
