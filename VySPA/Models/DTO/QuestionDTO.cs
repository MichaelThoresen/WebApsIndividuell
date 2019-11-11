﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VySPA.Models.DTO
{
    public class QuestionDTO
    {
        public int Id { get; set; }

        public String QuestionText { get; set; }

        public String AnswerText { get; set; }

        public int Rating { get; set; }
    }
}
