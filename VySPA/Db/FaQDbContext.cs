using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VySPA.Db
{
    public class FaQDbContext : DbContext
    {
        public FaQDbContext(DbContextOptions<FaQDbContext> options)
            : base(options)
        {

        }
    }
}
