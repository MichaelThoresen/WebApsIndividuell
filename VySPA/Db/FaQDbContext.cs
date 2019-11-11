using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VySPA.Models.Entities;

namespace VySPA.Db
{
    public class FaQDbContext : DbContext
    {
        public FaQDbContext(DbContextOptions<FaQDbContext> options)
            : base(options)
        {
        }
        public DbSet<Question> question { get; set; }
    }
}
