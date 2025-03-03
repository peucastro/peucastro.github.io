---
title: "RGB Image Processing in C++"
description: "A C++ project for representing and processing RGB images with 8-bit color channels, supporting PNG file manipulation and scripted image transformations."
pubDate: "May 18 2023"
heroImage: "/projects/feup-prog.png"
badge: "FEUP"
tags: ["image processing", "2023"]
repository: "https://github.com/peucastro/prog_project"
status: "completed"
technologies: ["C++", "Object-Oriented Programming"]
---

### **Introduction**

This project implements a **C++ library** for working with RGB images, enabling **image representation, manipulation, and scripted processing**.

### **Project Overview**

The project consists of three main components:

- **`Color`** – Represents individual RGB colors, storing red, green, and blue channel values (0-255).
- **`Image`** – Represents an image as a **2D matrix of colors**, with defined width and height.
- **`Script`** – Processes scripted commands for image transformations, enabling batch modifications.

### **Implementation Details**

#### **Color Representation**

The `Color` class models RGB colors using three integer values (**red, green, blue**), each occupying one byte. The class includes functions for manipulating and retrieving color values.

#### **Image Representation**

The `Image` class stores image dimensions and a **pixel matrix**, allowing per-pixel access and modifications. Images are treated as a grid where `(0,0)` represents the **top-left corner**, and `(width-1, height-1)` is the **bottom-right corner**.

#### **Script-Based Image Processing**

The implementation is centered around the `Script` class that parses and executes image commands from a script file.

The `Script::run()` method then enters a loop where it reads commands (like `open`, `invert`, or `rotate_left`) and calls the corresponding member functions to perform operations on the current image. For example, methods like `invert()` iterate over the entire pixel matrix to compute the inverted color for each pixel:

```cpp
void Script::invert()
{
    for (int i = 0; i < image->width(); i++)
    {
        for (int j = 0; j < image->height(); j++)
        {
            Color inv(255 - image->at(i, j).red(), 255 - image->at(i, j).green(), 255 - image->at(i, j).blue());
            image->at(i, j) = inv;
        }
    }
}
```

### **Key Features**

- PNG File Support
- Object-Oriented Design
- Memory-Efficient Representation
