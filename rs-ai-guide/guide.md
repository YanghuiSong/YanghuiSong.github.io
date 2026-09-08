# 遥感图像解译 × 人工智能科研学习导航

> 面向刚进入实验室、准备开展遥感图像智能解译研究的新生。  
> 这不是课程表，也不是“模型大全”，而是一份**高含金量、成体系、能帮助建立研究视野的阅读导航**。  
> 核心论文优先选择近五年内已经被 **CVPR / ICCV / ECCV / NeurIPS / ICLR / AAAI / Nature Machine Intelligence / IEEE TGRS** 等高水平会议或期刊认可、代码公开、并且能够代表一条研究主线的工作。  
> **更新：2026-09。**

---

# 1. 专业英语：先做到看论文不被术语卡住

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
| tile / patch / chip | 图块/切片 | land cover | 地表覆盖 |
| land use | 土地利用 | cross-sensor | 跨传感器 |
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
| corruption | 图像退化/扰动 |

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
| distillation | 蒸馏 |
| PEFT / LoRA | 参数高效微调 / 低秩适配 |
| vision-language model (VLM) | 视觉语言模型 |
| multimodal large language model (MLLM) | 多模态大语言模型 |
| image-text alignment | 图文对齐 |
| zero-shot | 零样本 |
| open-vocabulary | 开放词汇 |
| open-set | 开放集 |
| prompt | 提示词 |
| grounding | 将语言定位到图像实体/区域 |
| instruction tuning | 指令微调 |
| hallucination | 幻觉 |
| chain-of-thought (CoT) | 思维链 |
| reinforcement learning (RL) | 强化学习 |
| agent / agentic AI | 智能体 / 智能体式 AI |
| tool calling | 工具调用 |
| routing | 路由/任务分发 |
| planner / executor | 规划器 / 执行器 |
| trajectory | 智能体执行轨迹 |
| Model Context Protocol (MCP) | 模型上下文协议 |

---

# 2. 通用计算机视觉：先抓住 5 篇主线论文

不建议新生先把几十年 CV 历史全部补完。ResNet、U-Net、FPN、YOLO 需要知道基本思想，但进入当前视觉与遥感科研，更重要的是先把下面五篇真正读懂。

## 2.1 ViT

**An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale**

- Paper: https://arxiv.org/abs/2010.11929
- Code: https://github.com/google-research/vision_transformer
- Bilibili: https://www.bilibili.com/video/BV15P4y137jb/

**为什么读：**理解 patch embedding、token、self-attention 和位置编码，建立现代视觉 Transformer 的共同语言。

---

## 2.2 Swin Transformer

**Swin Transformer: Hierarchical Vision Transformer using Shifted Windows**

- Paper: https://arxiv.org/abs/2103.14030
- Code: https://github.com/microsoft/Swin-Transformer
- Bilibili: https://www.bilibili.com/video/BV13L4y1475U/

**为什么读：**理解层次化、多尺度视觉特征，以及为什么检测和分割需要比纯 ViT 更强的空间结构。

---

## 2.3 DETR

**End-to-End Object Detection with Transformers**

- Paper: https://arxiv.org/abs/2005.12872
- Code: https://github.com/facebookresearch/detr
- Bilibili: https://www.bilibili.com/video/BV1T6421F7tR/

**为什么读：**理解 object query、Hungarian matching、set prediction。后续大量 detection / segmentation / grounding 方法都继承了 query-based 思想。

---

## 2.4 Mask2Former

**Masked-attention Mask Transformer for Universal Image Segmentation**

- Paper: https://arxiv.org/abs/2112.01527
- Code: https://github.com/facebookresearch/Mask2Former
- Bilibili: https://www.bilibili.com/video/BV1EA22YnEY1/

**为什么读：**理解 mask classification、masked attention，以及 semantic / instance / panoptic segmentation 如何统一。

---

## 2.5 CLIP

**Learning Transferable Visual Models From Natural Language Supervision**

- Paper: https://arxiv.org/abs/2103.00020
- Code: https://github.com/openai/CLIP
- Bilibili: https://www.bilibili.com/video/BV1NM411a7CP/

**为什么读：**这是进入 open-vocabulary、zero-shot、vision-language foundation model 的关键起点。

---

# 3. 现代视觉基础模型：知道这些家族在解决什么

## 3.1 DINOv3

- Paper: https://arxiv.org/abs/2508.10104
- Code: https://github.com/facebookresearch/dinov3
- Bilibili: https://www.bilibili.com/video/BV1s7JCzbETY/

重点理解：

- self-supervised visual representation；
- frozen feature；
- dense feature；
- linear probing；
- 通用视觉表征和视觉语言对齐的差异。

DINO 系列更偏向“学强视觉表征”，CLIP 更偏向“把视觉对齐到语言语义空间”。两者是现在遥感 foundation model 中最常见的两种能力来源。

---

# 4. SAM 系列：从 promptable segmentation 到 concept segmentation

## SAM

**Segment Anything**

- Paper: https://arxiv.org/abs/2304.02643
- Code: https://github.com/facebookresearch/segment-anything

核心结构：

```text
Image Encoder
+ Prompt Encoder
+ Mask Decoder
```

SAM 的真正意义是把 segmentation 从固定类别网络转变为 **promptable segmentation**。

## SAM 2

- Code: https://github.com/facebookresearch/sam2

继续关注 image / video unified segmentation、memory、tracking 和 prompt propagation。

## SAM 3 / SAM 3.1

- Paper: https://arxiv.org/abs/2511.16719
- Code: https://github.com/facebookresearch/sam3
- Bilibili（SAM 系列解读）: https://www.bilibili.com/video/BV1Px9aBPEft/

SAM3 将短文本概念进一步引入 detection、segmentation 和 tracking。值得重点理解：

- text-conditioned detection；
- presence prediction；
- concept segmentation；
- detector + tracker；
- 文本概念与传统固定类别分割的差别。

---

# 5. Grounding 系列：让语言真正落到空间位置

## Grounding DINO

- Paper: https://arxiv.org/abs/2303.05499
- Code: https://github.com/IDEA-Research/GroundingDINO
- Bilibili: https://www.bilibili.com/video/BV1rjgBzHEBW/

核心思想：

```text
Text
 ↓
Text-conditioned Detection
 ↓
Bounding Box / Region
```

需要理解 open-set detection、phrase grounding、text-conditioned query。

## Grounding DINO + SAM

非常典型的现代组合范式：

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

这条思路以后还会在遥感 Agent 中反复出现：

> **大模型负责理解“要找什么”，专业视觉模型负责完成精确空间预测。**

---

# 6. 从 VLM 到 MLLM：理解代表性结构即可

## BLIP-2

- Paper: https://arxiv.org/abs/2301.12597
- Code: https://github.com/salesforce/LAVIS
- Bilibili: https://www.bilibili.com/video/BV18u4y137ZV/

关注 Q-Former 如何连接 frozen vision encoder 与 frozen LLM。

## LLaVA

- Paper: https://arxiv.org/abs/2304.08485
- Code: https://github.com/haotian-liu/LLaVA
- Bilibili: https://www.bilibili.com/video/BV1nw4m1S7nZ/

关注：

```text
Vision Encoder
→ Projector
→ LLM
→ Language Response
```

以及 visual instruction tuning。

## Qwen2.5-VL / Qwen3-VL

- Qwen2.5-VL: https://github.com/QwenLM/Qwen2.5-VL
- Qwen3-VL: https://github.com/QwenLM/Qwen3-VL
- Bilibili（Qwen2.5-VL）: https://www.bilibili.com/video/BV1wnbGzbEdy/
- Bilibili（Qwen3-VL）: https://www.bilibili.com/video/BV1Vx421m7r7?p=3

关注现代通用 MLLM 从：

```text
Caption / VQA
```

逐步走向：

```text
Spatial Reasoning
→ Grounding
→ Visual Search
→ Tool Use
→ Agent
```

---

# 7. 遥感近五年核心主线 I：Earth / Remote-Sensing Foundation Models

这一部分不要按年份孤立阅读，而要理解研究问题如何逐渐从“遥感版 MAE”走向**尺度、多传感器、多时相、统一模态与生成式 foundation model**。

## SatMAE — NeurIPS 2022

**SatMAE: Pre-training Transformers for Temporal and Multi-Spectral Satellite Imagery**

- Paper: https://arxiv.org/abs/2207.08051
- Code: https://github.com/sustainlab-group/SatMAE

**代表问题：**MAE 如何真正适应遥感的 multi-spectral 与 temporal 数据，而不是把 Sentinel 当普通 RGB。

---

## Scale-MAE — ICCV 2023

**Scale-MAE: A Scale-Aware Masked Autoencoder for Multiscale Geospatial Representation Learning**

- Paper: https://arxiv.org/abs/2212.14532
- Code: https://github.com/bair-climate-initiative/scale-mae

**代表问题：**遥感中的“尺度”不是普通 resize。GSD 和实际覆盖范围会改变目标的地理意义。

---

## CROMA — NeurIPS 2023

**CROMA: Remote Sensing Representations with Contrastive Radar-Optical Masked Autoencoders**

- Paper: https://arxiv.org/abs/2311.00566
- Code: https://github.com/antofuller/CROMA

**代表问题：**如何把 spatially aligned Optical + SAR 作为真正的跨模态自监督信号。

---

## SkySense — CVPR 2024

**SkySense: A Multi-Modal Remote Sensing Foundation Model Towards Universal Interpretation for Earth Observation Imagery**

- Paper: https://arxiv.org/abs/2312.10115
- Code: https://github.com/Jack-bo1220/SkySense

**代表问题：**

```text
Optical + SAR
+ Temporal
+ Geo-context
+ Billion-scale model
```

它代表了遥感 foundation model 从单模态预训练向多模态、时空统一建模的重要转折。

---

## SkySense++ — Nature Machine Intelligence 2025

**A Semantic-Enhanced Multi-Modal Remote Sensing Foundation Model for Earth Observation**

- Paper: https://www.nature.com/articles/s42256-025-01078-8
- Code / Model: https://github.com/Jack-bo1220/SkySense

**代表问题：**在大规模多模态预训练之外，如何进一步增强 semantic representation 与 few-shot transfer。

这篇适合作为 SkySense 主线的后续阅读。

---

## AnySat — CVPR 2025

**AnySat: One Earth Observation Model for Many Resolutions, Scales, and Modalities**

- Paper: https://arxiv.org/abs/2412.14123
- Code: https://github.com/gastruc/AnySat

**代表问题：**一个 EO model 能否同时面对不同 resolution、scale 和 sensor configuration，而不是每种输入重新设计模型。

AnySat 的 JEPA 与 scale-adaptive encoder 是很值得理解的统一建模思路。

---

## TerraMind — ICCV 2025

**TerraMind: Large-Scale Generative Multimodality for Earth Observation**

- Paper: https://arxiv.org/abs/2504.11171
- Code: https://github.com/IBM/terramind

**代表问题：**

```text
不仅 Encode 多模态
还可以 Any-to-Any Generate
```

它把 Earth Foundation Model 从 representation learning 推进一步，进入 generative multimodality。

---

## TESSERA — CVPR 2026

**TESSERA: Temporal Embeddings of Surface Spectra for Earth Representation and Analysis**

- Paper: https://arxiv.org/abs/2506.20380
- Code: https://github.com/ucam-eo/tessera

**代表问题：**如何把长期 Sentinel-1/2 time series 压缩成可广泛复用的 pixel-wise spectral-temporal embedding。

它特别适合帮助理解：

- time-series EO；
- cloud-corrupted observations；
- pixel-wise Earth embeddings；
- temporal foundation representation。

---

# 8. 遥感近五年核心主线 II：Vision-Language 与 Open World

## RemoteCLIP — IEEE TGRS 2024

**RemoteCLIP: A Vision Language Foundation Model for Remote Sensing**

- Paper: https://arxiv.org/abs/2306.11029
- Code: https://github.com/ChenDelong1999/RemoteCLIP

**代表问题：**通用 CLIP 与遥感之间存在 domain gap，如何建立遥感 domain-specific image-text representation。

---

## RS5M + GeoRSCLIP — IEEE TGRS 2024

**RS5M and GeoRSCLIP: A Large-Scale Vision-Language Dataset and a Large Vision-Language Model for Remote Sensing**

- Paper: https://arxiv.org/abs/2306.11300
- Code / Dataset: https://github.com/om-ai-lab/RS5M

**代表问题：**

```text
Remote sensing VLM
不仅需要模型
还需要规模足够大的 image-text data
```

RS5M 的价值更多在“数据规模 + domain VLM”这条路线。

---

## GeoChat — CVPR 2024

**GeoChat: Grounded Large Vision-Language Model for Remote Sensing**

- Paper: https://arxiv.org/abs/2311.15826
- Code: https://github.com/mbzuai-oryx/GeoChat

**代表问题：**遥感从 CLIP-style VLM 进入 grounded conversational MLLM。

关注：

- high-resolution imagery；
- region conversation；
- visual grounding；
- zero-shot remote-sensing tasks。

---

## EarthGPT — IEEE TGRS 2024

**EarthGPT: A Universal Multimodal Large Language Model for Multisensor Image Comprehension in Remote Sensing Domain**

- Paper: https://arxiv.org/abs/2401.16822
- Code: https://github.com/wivizhang/EarthGPT

**代表问题：**如何统一 optical / SAR / infrared 等 multisensor 遥感理解任务。

---

## LHRS-Bot — ECCV 2024

**LHRS-Bot: Empowering Remote Sensing with VGI-Enhanced Large Multimodal Language Model**

- Paper: https://arxiv.org/abs/2402.02544
- Code: https://github.com/NJU-LHRS/LHRS-Bot

**代表问题：**如何使用 volunteered geographic information (VGI) 构建高质量遥感视觉语言数据，并形成 domain-specific instruction tuning。

---

# 9. 遥感近五年核心主线 III：Open-Vocabulary Dense Prediction

## SegEarth-OV — CVPR 2025 Oral

**SegEarth-OV: Towards Training-Free Open-Vocabulary Segmentation for Remote Sensing Images**

- Paper: https://arxiv.org/abs/2410.01768
- Code: https://github.com/likyoo/SegEarth-OV

**为什么重要：**

它把 **training-free open-vocabulary semantic segmentation** 明确引入遥感，并围绕 CLIP dense feature 的空间分辨率与 global bias 问题构建方法。

这是理解当前遥感 OVSS / OVRSS 的核心前置论文之一。

---

## SkySense-O — CVPR 2025

**SkySense-O: Towards Open-World Remote Sensing Interpretation with Vision-Centric Visual-Language Modeling**

- Paper: https://arxiv.org/abs/2503.16608
- Code: https://github.com/zqcrafts/SkySense-O

**为什么重要：**

它把研究范围从单纯 segmentation 进一步推进到 **open-world remote sensing interpretation**，并构建细粒度开放类别像素标注 Sky-SA。

重点理解：

- vision-centric image-text alignment；
- open-category recognition；
- pixel-level open-world interpretation；
- CLIP + SAM 的融合思路。

---

## RSKT-Seg — AAAI 2026

**Exploring Efficient Open-Vocabulary Segmentation in the Remote Sensing**

- Paper: https://arxiv.org/abs/2509.12040
- Code: https://github.com/LiBingyu01/RSKT-Seg

**为什么值得看：**

这篇不仅提出方法，还建立了统一的 **OVRSISBench**，系统评估通用 OVS 方法在遥感中的表现，并围绕 rotation、spatial-semantic fusion 和 remote-sensing knowledge transfer 展开。

相比只做局部 inference trick 的工作，它更适合作为“遥感开放词汇分割如何形成规范 benchmark”的 2026 延伸阅读。

---

# 10. 遥感近五年核心主线 IV：Multi-Sensor MLLM

## EarthDial — CVPR 2025

**EarthDial: Turning Multi-sensory Earth Observations to Interactive Dialogues**

- Paper: https://arxiv.org/abs/2412.15190
- Code: https://github.com/hiyamdebary/EarthDial

EarthDial 是这条线非常值得读的一篇：

```text
RGB
+ SAR
+ Multispectral
+ Multi-resolution
+ Multi-temporal
→ Conversational EO Model
```

它将 11M+ instruction pairs 与 44 个 downstream datasets 纳入统一体系。

阅读时重点思考：

> 遥感 MLLM 相比自然图像 MLLM，真正额外需要理解的到底是“遥感词汇”，还是 sensor、resolution、spectral 与 temporal structure？

---

# 11. 2026 高含金量前沿 I：Pixel-Grounded Geospatial Reasoning

这一方向值得特别关注，因为它开始修正早期 MLLM 的一个根本问题：

> **语言答案正确，不代表模型真正看对了空间位置。**

## TerraScope — CVPR 2026

**TerraScope: Pixel-Grounded Visual Reasoning for Earth Observation**

- Project / Code: https://shuyansy.github.io/terrascope/

TerraScope 强调：

- pixel-grounded reasoning；
- optical / SAR modality-flexible reasoning；
- multi-temporal reasoning；
- response correctness + spatial grounding 双重评估。

它比传统“只看 VQA answer accuracy”的评测更接近真正的地理空间推理。

---

## GeoViS — CVPR 2026

**GeoViS: Geospatially Rewarded Visual Search for Remote Sensing Visual Grounding**

- Paper: CVPR 2026 Open Access
- Code: https://github.com/Zhang-Peirong/GeoVis

GeoViS 针对一个非常遥感化的问题：

> 超高分辨率影像中，目标可能只占极少像素，一次性把整幅图送入 MLLM 并不等于模型真的看到了目标。

因此它把 grounding 改造成：

```text
Global Scene
→ Visual Search
→ Local Evidence
→ Geospatial Reasoning
→ Grounding
```

这条思路与未来高分辨率 MLLM、Visual RAG、主动搜索都有直接联系。

---

# 12. 2026 高含金量前沿 II：Reasoning 与 Agentic Earth Observation

## RemoteReasoner — AAAI 2026

**RemoteReasoner: Towards Unifying Geospatial Reasoning Workflow**

- Paper: https://arxiv.org/abs/2507.19280
- Code: https://github.com/1e12Leon/RemoteReasoner

代表的演进是：

```text
Task-specific Model
→ Unified MLLM
→ Reasoning
→ Task Transformation
→ Object / Region / Pixel Output
```

重点看 RL 如何用于增强 geospatial reasoning autonomy，而不只是做传统 supervised instruction tuning。

---

## Earth-Agent — ICLR 2026

**Earth-Agent: Unlocking the Full Landscape of Earth Observation with Agents**

- Code: https://github.com/opendatalab/Earth-Agent

Earth-Agent 是目前 Agentic EO 很值得作为入口阅读的工作。

它将 Agent 形式化为 ReAct-style workflow，并整合大量 EO 专业工具，包括：

```text
Index
Inversion
Perception
Analysis
Statistics
```

真正值得关注的是它对 agent trajectory 的评估：

- 有没有选对 tool；
- tool 顺序是否合理；
- parameter 是否正确；
- 最终答案是否正确。

这比“最后结果对了就算 Agent 成功”严格得多。

---

## OpenEarthAgent — ECCV 2026

**OpenEarthAgent: A Unified Framework for Tool-Augmented Geospatial Agents**

- Paper: https://arxiv.org/abs/2602.17665
- ECCV 2026
- Code: 论文官方项目提供

它进一步把遥感 Agent 推向：

```text
Optical / SAR
+ GIS
+ Spectral Indices
+ Detection
+ Segmentation
+ Change Detection
+ Structured Reasoning Traces
```

对于真正想做 geospatial agent 的同学，应该优先理解这种**可验证工具链与 reasoning trajectory**，而不是先学习某个 Agent 框架 API。

---

# 13. 观察名单：很新，但暂时不放进“核心必读”

这一部分可以关注，但不建议新生在尚未读完主线论文时优先投入。

## RemoteAgent — 2026 Preprint

**RemoteAgent: Bridging Vague Human Intents and Earth Observation with RL-based Agentic MLLMs**

- Paper: https://arxiv.org/abs/2604.07765
- Code: https://github.com/1e12Leon/RemoteAgent

研究问题很有价值：

```text
Vague Human Intent
→ Intent Understanding
→ Capability Judgement
→ MLLM Internal Reasoning
      or
   External Expert Tool
```

特别值得关注“什么时候不调用工具”这一问题。

但目前更适合放在**前沿观察**而不是和 ICLR / ECCV / CVPR / AAAI 已接收论文并列为核心文献。

---

## TESSERA v2 — 2026 Preprint

- Paper: https://arxiv.org/abs/2607.03949
- Code: https://github.com/ucam-eo/tessera

可以作为 TESSERA CVPR 2026 的后续进展观察，但新生先读正式发表的 TESSERA 即可。

---

# 14. 为什么不建议把所有“最新论文”都塞进列表

前沿阅读最容易犯的错误是：

```text
arXiv 更新得快
= 每篇新论文都值得读
```

并不是。

更好的判断标准是：

1. **是否提出了一个后续研究反复需要面对的问题；**
2. **是否建立了数据集、benchmark 或通用 evaluation protocol；**
3. **是否形成模型家族或被大量后续工作采用；**
4. **是否真正改变了任务定义，而不是只优化一个模块；**
5. **是否在高水平同行评审中得到认可；**
6. **代码、数据和模型是否足够公开，便于复现与继续研究。**

因此本导航不会收录大量仅仅“2026 年刚出现”的增量论文。

---

# 15. 用四条主线理解过去五年的遥感 AI

## 主线 A：视觉表征 → Earth Foundation Model

```text
ViT
→ MAE / Self-Supervised Learning
→ SatMAE
→ Scale-MAE / CROMA
→ SkySense
→ AnySat
→ TerraMind / TESSERA
```

研究问题逐渐从：

```text
如何给遥感图像预训练？
```

变成：

```text
如何统一不同尺度、传感器、时相、波段和任务？
```

---

## 主线 B：固定类别 → Open World

```text
CLIP
→ RemoteCLIP / GeoRSCLIP
→ Grounding DINO
→ SAM
→ SegEarth-OV
→ SkySense-O
→ RSKT-Seg
→ SAM3-style Concept Segmentation
```

研究重点从：

```text
给定固定类别表预测
```

转向：

```text
自然语言定义目标
→ 找到目标
→ 精确定位
→ 像素级分割
```

---

## 主线 C：VLM → MLLM → Geospatial Reasoning

```text
CLIP
→ BLIP-2 / LLaVA
→ GeoChat / EarthGPT / LHRS-Bot
→ EarthDial
→ TerraScope / GeoViS
→ RemoteReasoner
```

重点不再只是“能否回答”，而是：

```text
是否真正利用了空间、传感器、时间与地理上下文进行推理？
```

---

## 主线 D：单模型 → Agentic Earth Observation

```text
MLLM
→ Tool Calling
→ Expert Vision Models
→ GIS / Spectral Tools
→ Reasoning Trajectory
→ Earth-Agent / OpenEarthAgent
```

Agent 的研究重点不是“接了多少个 API”，而是：

```text
任务理解是否正确？
该不该调用工具？
调用哪个工具？
参数对不对？
顺序对不对？
结果能否验证？
```

---

# 16. 给新生的阅读方式

不用写十页论文笔记。每篇论文至少回答：

1. 它解决的**真实问题**是什么？
2. 为什么现有方法不足？
3. 创新是在 **data / representation / architecture / training / inference / benchmark** 的哪一层？
4. 是否用了 external data / external model / GT / TTA / online adaptation？
5. 主结果的 protocol 是否公平？
6. 最重要的 ablation 在验证什么？
7. 代码里的核心模块在哪里？
8. 它留下的最明显问题是什么？

如果能回答这些问题，就比“看完一百篇摘要”更有价值。

---

# 结语

不要追着模型名字跑，要追**研究问题的演进**。

过去五年的遥感 AI，大致经历了：

```text
Task-specific CV
        ↓
Transformer / Foundation Representation
        ↓
Multi-sensor Earth Foundation Model
        ↓
Vision-Language Alignment
        ↓
Open-Vocabulary Perception
        ↓
Remote-Sensing MLLM
        ↓
Pixel-Grounded Geospatial Reasoning
        ↓
Agentic Earth Observation
```

真正值得长期掌握的不是某个模型，而是这些转变背后的问题：

> **遥感数据和自然图像究竟有什么不同？  
> 如何利用尺度、光谱、时间和多传感器？  
> 如何从固定类别走向开放世界？  
> 如何让语言模型不仅“会说”，而且真正“看对、找准、调用正确工具并完成任务”？**

这才是未来继续阅读 2027、2028 年新工作的基础。
