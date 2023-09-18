---
name: Keynote - Practicing Safe Rx, The importance of intelligible machine learning in healthcare	
speakers:
  - Rich Caruana
categories:
  - Keynotes
---

In machine learning often tradeoffs must be made between accuracy and intelligibility: the mostaccurate models usually are not very intelligible, and the most intelligible models usually are less accurate.  This can limit the accuracy of models that can safely be deployed in mission-critical applications such as healthcare where being able to understand, validate, edit, and trust models is important.  EBMs (Explainable Boosting Machines) are a recent learning method based on generalized additive models (GAMs) that are as accurate as full complexity models, more intelligible than linear models, and which can be made differentially private with little loss in accuracy.  EBMs make it easy to understand what a model has learned and to edit the model when it learns inappropriate things.

In the talk I’ll present several case studies where EBMs discover surprising patterns in medical data that would have made deploying black-box models risky.