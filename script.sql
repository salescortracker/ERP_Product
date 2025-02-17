USE [usine]
GO
/****** Object:  UserDefinedFunction [dbo].[assetPresetnValue]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE function [dbo].[assetPresetnValue] (@deprPer float,@opeValue float,@dat datetime)
returns varchar(50)
as
begin
declare
@d datetime =@dat,
@pd datetime=sysdatetime(),
@n float=@opeValue;

while @d < @pd
begin
set @n = @n-(@n * @deprPer/1200.0);
set @d = dateadd(MM,1,@d);
end




return  dbo.makcur(@n);
end;
GO
/****** Object:  UserDefinedFunction [dbo].[initCapital]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[initCapital] (@str as varchar(max))
returns varchar(50)
as
begin
declare @s varchar(max) = ' ';
declare @s1 varchar(max) = ' ';
declare @i int=1;
while @i<=LEN(@str)
begin

set @s1 = substring(@str, @i, 1);
                if @i = 1
                begin
                    set @s1 = UPPER(@s1);
                end;
                else
                begin
                    if substring(@str, @i - 1, 1) = ''
                    begin
                       set @s1 = Upper(@s1);
                    end;
                    else
                    begin
                        set @s1 = LOWER(@s1);
                    end;
                end
                set @s = @s + @s1;





set @i = @i+1;
end;



return @s;
end;
GO
/****** Object:  UserDefinedFunction [dbo].[makCur]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE function [dbo].[makCur] (@amt float)
returns varchar(50)
as
begin
declare @str varchar(40) = ' ';
set @str = case when @amt is null then ' ' else case when @amt = 0 then ' '  else  CONVERT(varchar,cast(@amt as money),1) end end
return @str;
end;
GO
/****** Object:  UserDefinedFunction [dbo].[numToStrDate]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[numToStrDate] (@dat varchar(50))
returns varchar(50)
as
begin
declare @str varchar(40) = ' ';
set @str = SUBSTRING(@dat,1,2) + '-' + substring(DateName( month , DateAdd( month ,  CONVERT(int,substring(@dat,4,2))   , -1 )),1,3) + '-' + RIGHT(@dat,2)
return @str;
end;
GO
/****** Object:  UserDefinedFunction [dbo].[strDate]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[strDate] (@dat datetime)
returns varchar(50)
as
begin
declare @str varchar(40) = ' ';
set @str = case when DAY(@dat) < 10 then '0' else '' end + CONVERT(varchar(2),day(@dat)) + '-' + SUBSTRING(DATENAME(MM,@dat),1,3) + '-' + right(CONVERT(varchar(4),year(@dat)),2);
return @str;
end;
GO
/****** Object:  UserDefinedFunction [dbo].[strDateTime]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[strDateTime] (@dat datetime)
returns varchar(50)
as
begin
declare @str varchar(40) = ' ';
set @str = case when DAY(@dat) < 10 then '0' else '' end + CONVERT(varchar(2),day(@dat)) + '-' + SUBSTRING(DATENAME(MM,@dat),1,3) + '-' + right(CONVERT(varchar(4),year(@dat)),2) + ' ' + case when datepart(hh,@dat) < 10 then '0' else '' end + CONVERT(varchar(2),datepart(hh,@dat)) + ':' + case when datepart(mi,@dat) < 10 then '0' else '' end + CONVERT(varchar(2),datepart(mi,@dat)) ;
return @str;
end;
GO
/****** Object:  UserDefinedFunction [dbo].[strDateTime2]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[strDateTime2] (@dat datetime,@tim as datetime)
returns varchar(50)
as
begin
declare @str varchar(40) = ' ';
declare @ti as datetime = convert(datetime,@tim);
set @str = case when DAY(@dat) < 10 then '0' else '' end + CONVERT(varchar(2),day(@dat)) + '-' + SUBSTRING(DATENAME(MM,@dat),1,3) + '-' + right(CONVERT(varchar(4),year(@dat)),2) + ' ' + case when datepart(hh,@ti) < 10 then '0' else '' end + CONVERT(varchar(2),datepart(hh,@ti)) + ':' + case when datepart(mi,@ti) < 10 then '0' else '' end + CONVERT(varchar(2),datepart(mi,@ti)) ;
return @str;
end;
GO
/****** Object:  UserDefinedFunction [dbo].[strShortDate]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[strShortDate] (@dat datetime)
returns varchar(50)
as
begin
declare @str varchar(40) = ' ';

set @str = case when DAY(@dat) < 10 then '0' else '' end + CONVERT(varchar(2),day(@dat)) + '/' + case when month(@dat) < 10 then '0' else '' end + CONVERT(varchar(2),month(@dat)) ;
return @str;
end;
GO
/****** Object:  Table [dbo].[invUM]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[invUM](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[um] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[invGroups]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[invGroups](
	[recordId] [int] IDENTITY(101,1) NOT NULL,
	[mGrp] [varchar](50) NULL,
	[sGrp] [varchar](50) NULL,
	[sno] [int] NULL,
	[chk] [int] NULL,
	[groupCode] [varchar](50) NULL,
	[grpTag] [varchar](50) NULL,
	[statu] [int] NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[pic] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[invMaterials]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[invMaterials](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[itemid] [varchar](50) NULL,
	[itemName] [varchar](100) NULL,
	[grp] [int] NULL,
	[stdRate] [float] NULL,
	[reOrderQty] [float] NULL,
	[shelfLifeReqd] [int] NULL,
	[inventoryReqd] [int] NULL,
	[statu] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[pic] [varchar](50) NULL,
	[vendorId] [int] NULL,
	[costingType] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[invMaterialUnits]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[invMaterialUnits](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[um] [int] NULL,
	[stdUm] [int] NULL,
	[conversionFactor] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [PK_invMaterialUnits] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[invMaterialCompleteDetails_view]    Script Date: 12-07-2024 14:37:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create view [dbo].[invMaterialCompleteDetails_view] as 
select a.recordId,a.itemid,a.itemname,grpid,grpname,b.recordID umid, b.um,a.branchid,a.customercode from
(select a.recordId,a.itemid,a.itemname,a.grp grpId,b.sGrp grpname,a.umid,a.branchid,a.customercode from
(select a.recordId,a.itemid,a.itemname,a.grp,b.umid, a.branchid,a.customerCode from(select * from invmaterials where statu=1)a,
(select recordId,max(stdUm) umid from invmaterialunits group by recordID)b where a.recordID=b.recordId)a,
(select * from invGroups )b where a.grp =b.recordID )a,
(select * from invUM )b where a.umid =b.recordID 
GO
/****** Object:  Table [dbo].[finassets]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[finassets](
	[recordId] [int] IDENTITY(101,1) NOT NULL,
	[AssetName] [varchar](100) NOT NULL,
	[Depreciation] [numeric](18, 4) NULL,
	[OpeningValue] [numeric](18, 4) NULL,
	[date] [datetime] NULL,
	[branchId] [varchar](50) NOT NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[finassets_view]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create view [dbo].[finassets_view] as select recordId,AssetName,Depreciation,dbo.makCur(OpeningValue) opvalue,date opedate,dbo.assetPresetnValue(Depreciation,OpeningValue,date) presetnvalue,branchid,customerCode from finassets 
GO
/****** Object:  Table [dbo].[accountsAssign]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[accountsAssign](
	[slno] [int] IDENTITY(1,1) NOT NULL,
	[transcode] [varchar](50) NULL,
	[account] [int] NULL,
	[module] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[slno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[admroles]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[admroles](
	[roleName] [varchar](50) NULL,
	[moduleCode] [int] NULL,
	[menuCode] [int] NULL,
	[screenCode] [int] NULL,
	[transCode] [int] NULL,
	[pos] [int] NULL,
	[customerCode] [int] NULL,
	[sno] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[admTaxes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[admTaxes](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[taxCode] [varchar](50) NULL,
	[taxPer] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[admUserwiseAssigns]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[admUserwiseAssigns](
	[userName] [varchar](50) NULL,
	[sno] [bigint] IDENTITY(1,1) NOT NULL,
	[assignedId] [varchar](50) NULL,
	[assignedTyp] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmBillSubmissionsDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmBillSubmissionsDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[billno] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_crmBillSubmissionsDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmBillSubmissionsUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmBillSubmissionsUni](
	[recordId] [int] NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[customerId] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmDiscountListDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmDiscountListDet](
	[recordId] [bigint] NOT NULL,
	[sno] [int] NOT NULL,
	[productId] [int] NULL,
	[discount] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [PK_crmDiscountListDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmDiscountListUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmDiscountListUni](
	[recordId] [bigint] IDENTITY(1,1) NOT NULL,
	[discountListName] [varchar](50) NULL,
	[effectiveDate] [datetime] NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmEnquiriesRX]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmEnquiriesRX](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[callerid] [int] NULL,
	[customer] [varchar](100) NULL,
	[mainCustomerId] [int] NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[prevcallId] [int] NULL,
	[prevCallMode] [varchar](50) NULL,
	[customerComments] [varchar](500) NULL,
	[callerComments] [varchar](500) NULL,
	[callPosition] [int] NULL,
	[nextCallDate] [datetime] NULL,
	[nextCallMode] [int] NULL,
	[statu] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[username] [varchar](50) NULL,
	[priceList] [varchar](50) NULL,
	[discountList] [varchar](50) NULL,
	[nextCallId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmOrdersRXDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmOrdersRXDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[dat] [datetime] NULL,
	[product] [varchar](50) NULL,
	[coating] [varchar](50) NULL,
	[dia] [varchar](50) NULL,
	[spherical] [varchar](50) NULL,
	[cylindrical] [varchar](50) NULL,
	[additional] [varchar](50) NULL,
	[side] [varchar](50) NULL,
	[shade] [varchar](50) NULL,
	[qty] [int] NULL,
	[rat] [int] NULL,
	[RXQty] [int] NULL,
	[RXQC] [int] NULL,
	[HCQty] [int] NULL,
	[HMCQty] [int] NULL,
	[TintQty] [int] NULL,
	[FinalQC] [int] NULL,
	[despatchedQty] [int] NULL,
	[typ] [int] NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[blankBase] [varchar](50) NULL,
	[blanksInvQty] [int] NULL,
 CONSTRAINT [pk_crmOrdersRXDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmOrdersRXUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmOrdersRXUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[approveddat] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[approvedUsr] [varchar](50) NULL,
	[customerId] [int] NULL,
	[customer] [varchar](100) NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[typeofSale] [int] NULL,
	[baseAmt] [float] NULL,
	[discount] [float] NULL,
	[taxes] [float] NULL,
	[roundoff] [float] NULL,
	[totalAmt] [float] NULL,
	[validityDate] [datetime] NULL,
	[typ] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmPostTeleCalling]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmPostTeleCalling](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[callerid] [int] NULL,
	[customerId] [int] NULL,
	[customerName] [varchar](100) NULL,
	[customerComments] [varchar](500) NULL,
	[callerComments] [varchar](500) NULL,
	[callType] [int] NULL,
	[nextCallDate] [datetime] NULL,
	[nextCallMode] [int] NULL,
	[userName] [varchar](50) NULL,
	[nextCallId] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmPriceListDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmPriceListDet](
	[recordId] [bigint] NOT NULL,
	[sno] [int] NOT NULL,
	[productId] [int] NULL,
	[price] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[taxId] [int] NULL,
 CONSTRAINT [PK_crmPriceListDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmPriceListUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmPriceListUni](
	[recordId] [bigint] IDENTITY(1,1) NOT NULL,
	[priceListName] [varchar](50) NULL,
	[effectiveDate] [datetime] NULL,
	[pos] [int] NULL,
	[mrpCheck] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[currency] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmQuotationDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmQuotationDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[itemId] [int] NULL,
	[itemName] [varchar](100) NULL,
	[itemDescription] [varchar](250) NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[rat] [float] NULL,
	[discPer] [float] NULL,
	[leadDays] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_crmQuotationDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmQuotationsRXDiscounts]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmQuotationsRXDiscounts](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[frmdate] [datetime] NULL,
	[todate] [datetime] NULL,
	[product] [varchar](50) NULL,
	[coating] [varchar](50) NULL,
	[discount] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_crmQuotationsRXDiscounts] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmQuotationsRXPrices]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmQuotationsRXPrices](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[frmdate] [datetime] NULL,
	[todate] [datetime] NULL,
	[product] [varchar](50) NULL,
	[coating] [varchar](50) NULL,
	[rat] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_crmQuotationsRXPrices] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmQuotationsRXUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmQuotationsRXUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[enquiryId] [int] NULL,
	[customerId] [varchar](100) NULL,
	[frmdate] [datetime] NULL,
	[todate] [datetime] NULL,
	[mobile] [varchar](50) NULL,
	[statu] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmQuotationTaxes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmQuotationTaxes](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[taxCode] [varchar](50) NULL,
	[taxPer] [float] NULL,
	[taxValue] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[lineId] [int] NULL,
 CONSTRAINT [pk_crmQuotationTaxes] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmQuotationTerms]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmQuotationTerms](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[term] [varchar](200) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_crmQuotationTerms] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmQuotationUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmQuotationUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[approvedDat] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[approvedUsr] [varchar](50) NULL,
	[saleType] [varchar](50) NULL,
	[refEnquiryId] [int] NULL,
	[refEmployee] [bigint] NULL,
	[validity] [datetime] NULL,
	[reference] [varchar](100) NULL,
	[partyId] [int] NULL,
	[partyName] [varchar](100) NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[baseamt] [float] NULL,
	[discount] [float] NULL,
	[taxes] [float] NULL,
	[others] [float] NULL,
	[totalAmt] [float] NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmSaleOrderDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmSaleOrderDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[itemId] [int] NULL,
	[itemName] [varchar](100) NULL,
	[itemDescription] [varchar](250) NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[rat] [float] NULL,
	[discPer] [float] NULL,
	[reqdBy] [datetime] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_crmSaleOrderDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmSaleOrderTaxes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmSaleOrderTaxes](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[taxcode] [varchar](50) NULL,
	[taxper] [float] NULL,
	[taxvalue] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[lineId] [int] NULL,
 CONSTRAINT [pk_crmSaleOrderTaxes] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmSaleOrderTerms]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmSaleOrderTerms](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[term] [varchar](200) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_crmSaleOrderTerms] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmSaleOrderUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmSaleOrderUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[approvedDat] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[approvedUsr] [varchar](50) NULL,
	[saleType] [varchar](50) NULL,
	[refQuotationId] [int] NULL,
	[validity] [datetime] NULL,
	[reference] [varchar](100) NULL,
	[partyId] [int] NULL,
	[partyName] [varchar](100) NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[baseamt] [float] NULL,
	[discount] [float] NULL,
	[taxes] [float] NULL,
	[others] [float] NULL,
	[totalAmt] [float] NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[printCount] [int] NULL,
	[mailCount] [int] NULL,
	[typeOfOrder] [varchar](20) NULL,
	[countryId] [int] NULL,
	[conversionFactor] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmSetup]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmSetup](
	[setupCode] [varchar](50) NULL,
	[setupDescription] [varchar](250) NULL,
	[pos] [varchar](50) NULL,
	[posDescription] [varchar](250) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[sno] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmTargetSettings]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmTargetSettings](
	[slno] [bigint] IDENTITY(1,1) NOT NULL,
	[dat] [datetime] NULL,
	[empno] [bigint] NULL,
	[yea] [int] NULL,
	[mont] [int] NULL,
	[categoryId] [int] NULL,
	[productId] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[tgt] [float] NULL,
	[calls] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[slno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmTaxAssigningDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmTaxAssigningDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[taxCode] [varchar](50) NULL,
	[taxper] [float] NULL,
	[taxOn] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [PK_crmTaxAssigningDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmTaxAssigningUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmTaxAssigningUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[taxName] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmTeleCallDetails]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmTeleCallDetails](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[company] [varchar](100) NULL,
	[contactPerson] [varchar](100) NULL,
	[mobile] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[customerComments] [varchar](500) NULL,
	[personalComment] [varchar](500) NULL,
	[impression] [varchar](50) NULL,
	[followUpdat] [datetime] NULL,
	[followUpMode] [varchar](50) NULL,
	[preceedCallId] [varchar](50) NULL,
	[callMode] [varchar](50) NULL,
	[usrName] [varchar](50) NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[crmTeleCallingRX]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[crmTeleCallingRX](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[callerid] [int] NULL,
	[customer] [varchar](100) NULL,
	[mobile] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[prevcallId] [int] NULL,
	[prevCallMode] [varchar](50) NULL,
	[customerComments] [varchar](500) NULL,
	[callerComments] [varchar](500) NULL,
	[callPosition] [int] NULL,
	[nextCallDate] [datetime] NULL,
	[nextCallMode] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[username] [varchar](50) NULL,
	[nextCallId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[finAccGroups]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[finAccGroups](
	[recordId] [int] IDENTITY(101,1) NOT NULL,
	[mGrp] [varchar](50) NULL,
	[sGrp] [varchar](50) NULL,
	[sno] [int] NULL,
	[chk] [int] NULL,
	[groupCode] [varchar](50) NULL,
	[grpTag] [varchar](50) NULL,
	[statu] [int] NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[finAccounts]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[finAccounts](
	[recordid] [int] IDENTITY(1001,1) NOT NULL,
	[accname] [varchar](100) NULL,
	[accgroup] [int] NULL,
	[address] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[state] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[pin] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webId] [varchar](50) NULL,
	[acType] [varchar](50) NULL,
	[acChk] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[finAccountsAssign]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[finAccountsAssign](
	[trans] [varchar](100) NULL,
	[traCode] [varchar](50) NULL,
	[accname] [int] NULL,
	[branchid] [varchar](50) NULL,
	[customercode] [int] NULL,
	[sno] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[finBankCheckings]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[finBankCheckings](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[dat] [datetime] NULL,
	[details] [varchar](300) NULL,
	[bank] [int] NULL,
	[amt] [float] NULL,
	[description] [varchar](250) NULL,
	[typ] [int] NULL,
	[pos] [int] NULL,
	[usrname] [varchar](50) NULL,
	[clearedDat] [datetime] NULL,
	[clearedby] [varchar](50) NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_finBankCheckings] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[finexecDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[finexecDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[accname] [int] NULL,
	[cre] [float] NULL,
	[deb] [float] NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[dat] [datetime] NULL,
 CONSTRAINT [pk_finexecDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[finexecDet_history]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[finexecDet_history](
	[auditId] [bigint] NOT NULL,
	[sno] [int] NOT NULL,
	[recordId] [int] NOT NULL,
	[accname] [int] NULL,
	[cre] [float] NULL,
	[deb] [float] NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[dat] [datetime] NULL,
	[auditDate] [datetime] NULL,
	[auditType] [int] NULL,
 CONSTRAINT [pk_finexecDet_history] PRIMARY KEY CLUSTERED 
(
	[auditId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[finexecUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[finexecUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [int] NULL,
	[dat] [datetime] NULL,
	[narr] [varchar](5000) NULL,
	[tratype] [varchar](50) NULL,
	[traref] [varchar](50) NULL,
	[vouchertype] [varchar](50) NULL,
	[bankDet] [varchar](500) NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[usr] [varchar](50) NULL,
	[printCount] [int] NULL,
	[detail1] [varchar](100) NULL,
	[detail2] [varchar](100) NULL,
	[detail3] [varchar](100) NULL,
	[detail4] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[finexecUni_history]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[finexecUni_history](
	[auditId] [bigint] IDENTITY(1,1) NOT NULL,
	[recordId] [int] NULL,
	[seq] [int] NULL,
	[dat] [datetime] NULL,
	[narr] [varchar](5000) NULL,
	[tratype] [varchar](50) NULL,
	[traref] [varchar](50) NULL,
	[vouchertype] [varchar](50) NULL,
	[bankDet] [varchar](500) NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[usr] [varchar](50) NULL,
	[printCount] [int] NULL,
	[auditDate] [datetime] NULL,
	[auditType] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[auditId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdAllowanceDeductionRanges]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdAllowanceDeductionRanges](
	[allowanceId] [int] NULL,
	[lineid] [bigint] IDENTITY(1,1) NOT NULL,
	[fromValue] [float] NULL,
	[toValue] [float] NULL,
	[valu] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdAllowancesDeductions]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdAllowancesDeductions](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[allowance] [varchar](50) NULL,
	[allowanceCheck] [int] NULL,
	[calcType] [int] NULL,
	[effectAs] [int] NULL,
	[statu] [int] NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdAllowancesDeductionsEffects]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdAllowancesDeductionsEffects](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[allowanceOn] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_hrdAllowancesDeductionsEffects] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdDepartments]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdDepartments](
	[recordId] [int] IDENTITY(101,1) NOT NULL,
	[mGrp] [varchar](50) NULL,
	[sGrp] [varchar](50) NULL,
	[sno] [int] NULL,
	[chk] [int] NULL,
	[groupCode] [varchar](50) NULL,
	[grpTag] [varchar](50) NULL,
	[statu] [int] NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdDesignations]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdDesignations](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[designation] [varchar](50) NULL,
	[department] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdDesignationsAllowances]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdDesignationsAllowances](
	[recordId] [int] NULL,
	[lineId] [int] IDENTITY(1,1) NOT NULL,
	[allowance] [int] NULL,
	[valu] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdDesignationsLeaves]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdDesignationsLeaves](
	[recordId] [int] NULL,
	[lineid] [int] IDENTITY(1,1) NOT NULL,
	[leaveId] [int] NULL,
	[valu] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdEmpInOutDetails]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdEmpInOutDetails](
	[lineid] [bigint] IDENTITY(1,1) NOT NULL,
	[empId] [bigint] NULL,
	[dat] [datetime] NULL,
	[fromTime] [varchar](50) NULL,
	[toTime] [varchar](50) NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdEmployeeAllowancesDeductions]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdEmployeeAllowancesDeductions](
	[recordId] [bigint] NULL,
	[lineId] [bigint] IDENTITY(1,1) NOT NULL,
	[allowance] [int] NULL,
	[valu] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdEmployeeCurriculum]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdEmployeeCurriculum](
	[recordId] [bigint] NULL,
	[lineId] [bigint] IDENTITY(1,1) NOT NULL,
	[frmyear] [int] NULL,
	[toyear] [int] NULL,
	[qual] [varchar](100) NULL,
	[board] [varchar](100) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdEmployeeExperience]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdEmployeeExperience](
	[recordId] [bigint] NULL,
	[lineId] [bigint] IDENTITY(1,1) NOT NULL,
	[frmyear] [int] NULL,
	[toyear] [int] NULL,
	[designation] [varchar](100) NULL,
	[organisation] [varchar](100) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdEmployeeFamilyDetails]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdEmployeeFamilyDetails](
	[recordId] [bigint] NULL,
	[lineId] [bigint] IDENTITY(1,1) NOT NULL,
	[relativename] [varchar](100) NULL,
	[relation] [varchar](100) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdEmployeeIdentifications]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdEmployeeIdentifications](
	[recordId] [bigint] NULL,
	[lineId] [bigint] IDENTITY(1,1) NOT NULL,
	[identit] [varchar](250) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdEmployeeLeaves]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdEmployeeLeaves](
	[recordId] [bigint] NULL,
	[lineId] [bigint] IDENTITY(1,1) NOT NULL,
	[leaveId] [int] NULL,
	[valu] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdEmployees]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdEmployees](
	[recordId] [bigint] IDENTITY(100,1) NOT NULL,
	[empno] [varchar](50) NULL,
	[empname] [varchar](100) NULL,
	[surname] [varchar](50) NULL,
	[fathername] [varchar](100) NULL,
	[gender] [int] NULL,
	[dob] [datetime] NULL,
	[modeofPay] [int] NULL,
	[maritalStatus] [int] NULL,
	[address] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[pan] [varchar](50) NULL,
	[aadhar] [varchar](50) NULL,
	[idtype] [varchar](50) NULL,
	[idno] [varchar](50) NULL,
	[height] [varchar](50) NULL,
	[weight] [varchar](50) NULL,
	[bloodGrp] [varchar](50) NULL,
	[referenc] [varchar](100) NULL,
	[department] [int] NULL,
	[designation] [int] NULL,
	[doj] [datetime] NULL,
	[MGR] [bigint] NULL,
	[basicPay] [float] NULL,
	[grandPay] [float] NULL,
	[basicChk] [int] NULL,
	[leavesScheme] [varchar](50) NULL,
	[bankPay] [int] NULL,
	[sbAC] [varchar](50) NULL,
	[bankifscno] [varchar](50) NULL,
	[bankName] [varchar](50) NULL,
	[bankBranch] [varchar](50) NULL,
	[paddr] [varchar](250) NULL,
	[pcountry] [varchar](50) NULL,
	[pstat] [varchar](50) NULL,
	[pdist] [varchar](50) NULL,
	[pcity] [varchar](50) NULL,
	[pzip] [varchar](50) NULL,
	[pmobile] [varchar](50) NULL,
	[ptel] [varchar](50) NULL,
	[pfax] [varchar](50) NULL,
	[pemail] [varchar](50) NULL,
	[pwebid] [varchar](50) NULL,
	[pic] [varchar](50) NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdInterviewCandidates]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdInterviewCandidates](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[resumeId] [int] NULL,
	[appointmentStatus] [int] NULL,
	[appointmentDate] [datetime] NULL,
	[maxDateToJoin] [datetime] NULL,
	[joiningStatus] [int] NULL,
	[joiningDate] [datetime] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[refEmpNo] [bigint] NULL,
	[interviewerComments] [varchar](250) NULL,
	[appointmentComments] [varchar](250) NULL,
	[joiningComments] [varchar](250) NULL,
 CONSTRAINT [pk_hrdInterviewCandidates] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdInterviewsPanel]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdInterviewsPanel](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[empno] [bigint] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_hrdInterviewsPanel] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdInterviewsUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdInterviewsUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[interviewDate] [datetime] NULL,
	[venue] [varchar](100) NULL,
	[designation] [int] NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[descriptio] [varchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdLeaves]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdLeaves](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[leaveCode] [varchar](50) NULL,
	[leaveDescription] [varchar](50) NULL,
	[payType] [int] NULL,
	[forwardType] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customercode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdResumeCurriculum]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdResumeCurriculum](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[fromYear] [int] NULL,
	[toYead] [int] NULL,
	[qualification] [varchar](50) NULL,
	[board] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_hrdResumeCurriculum] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdResumeExperience]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdResumeExperience](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[fromYear] [int] NULL,
	[toYead] [int] NULL,
	[designation] [varchar](50) NULL,
	[organisation] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_hrdResumeExperience] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdResumeUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdResumeUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[appDate] [datetime] NULL,
	[nameOfCandidate] [varchar](100) NULL,
	[surName] [varchar](50) NULL,
	[fatherName] [varchar](100) NULL,
	[dob] [datetime] NULL,
	[gender] [int] NULL,
	[maritalStatus] [int] NULL,
	[reference] [varchar](100) NULL,
	[designation] [int] NULL,
	[expectedSalary] [float] NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[permenentId] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hrdShifts]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hrdShifts](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[shiftName] [varchar](50) NULL,
	[fromTime] [varchar](50) NULL,
	[toTime] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[invDepartments]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[invDepartments](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[department] [varchar](50) NULL,
	[area] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[invLosses]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[invLosses](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[lossName] [varchar](50) NULL,
	[allowableper] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[invMaterialManagement]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[invMaterialManagement](
	[transactionId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[gin] [varchar](50) NULL,
	[itemName] [int] NULL,
	[dat] [datetime] NULL,
	[batchNo] [varchar](50) NULL,
	[manudate] [datetime] NULL,
	[expdate] [datetime] NULL,
	[store] [int] NULL,
	[qtyin] [float] NULL,
	[qtyout] [float] NULL,
	[stdum] [int] NULL,
	[rat] [float] NULL,
	[department] [int] NULL,
	[productBatchNo] [int] NULL,
	[descr] [varchar](300) NULL,
	[transactionType] [int] NOT NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[lineId] [int] NULL,
 CONSTRAINT [PK_invMaterialManagement] PRIMARY KEY CLUSTERED 
(
	[transactionId] ASC,
	[transactionType] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[invSetup]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[invSetup](
	[sno] [int] IDENTITY(1,1) NOT NULL,
	[dat] [datetime] NULL,
	[setupCode] [varchar](50) NULL,
	[setupDescription] [varchar](300) NULL,
	[setupValue] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[invStores]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[invStores](
	[recordID] [int] IDENTITY(1,1) NOT NULL,
	[storeCode] [varchar](50) NULL,
	[storeName] [varchar](50) NULL,
	[storeIncharge] [varchar](50) NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[invTransactionsDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[invTransactionsDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[itemId] [int] NULL,
	[qtyin] [float] NULL,
	[qtyout] [float] NULL,
	[um] [int] NULL,
	[conversion] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_invTransactionsDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[invTransactionsUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[invTransactionsUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[dat] [datetime] NULL,
	[traType] [varchar](50) NULL,
	[descriptio] [varchar](500) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[maiEquipGroups]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[maiEquipGroups](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[mGrp] [int] NULL,
	[sGrp] [varchar](50) NULL,
	[sno] [int] NULL,
	[chk] [int] NULL,
	[groupCode] [varchar](50) NULL,
	[grpTag] [varchar](50) NULL,
	[statu] [int] NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[maiEquipment]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[maiEquipment](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[equipmentCode] [varchar](50) NULL,
	[equipmentName] [varchar](100) NULL,
	[equipmentGroup] [int] NULL,
	[preferableServiceSupplier] [int] NULL,
	[preferableSparesSupplier] [int] NULL,
	[mobileCheck] [int] NULL,
	[roomno] [int] NULL,
	[amcDate] [datetime] NULL,
	[branchID] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[lastPMDate] [datetime] NULL,
	[maxHrs] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[maiEquipmentInsurances]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[maiEquipmentInsurances](
	[recordId] [bigint] IDENTITY(1,1) NOT NULL,
	[equipid] [int] NULL,
	[dat] [datetime] NULL,
	[vendorId] [int] NULL,
	[vendorName] [varchar](100) NULL,
	[descriptio] [varchar](200) NULL,
	[insureFrom] [datetime] NULL,
	[insureTo] [datetime] NULL,
	[insureAmt] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[maiEquipmentPMDetails]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[maiEquipmentPMDetails](
	[recordId] [bigint] IDENTITY(1,1) NOT NULL,
	[equipid] [int] NULL,
	[sno] [int] NULL,
	[dat] [datetime] NULL,
	[descriptio] [varchar](200) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[maiEquipmentPreventiveMaintenances]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[maiEquipmentPreventiveMaintenances](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[prevmaintenance] [varchar](100) NULL,
	[frequencyInDays] [int] NULL,
	[chk] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_maiEquipmentPreventiveMaintenances] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[maiEquipmentSpecifications]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[maiEquipmentSpecifications](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[specification] [varchar](100) NULL,
	[valu] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_mainEquipmentSpecifications] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[makeSessions]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[makeSessions](
	[sno] [int] IDENTITY(1,1) NOT NULL,
	[userName] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[kCode] [varchar](1000) NULL,
	[logDate] [datetime] NULL,
	[sessionClose] [datetime] NULL,
	[pos] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[misCountryMaster]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[misCountryMaster](
	[recordId] [int] IDENTITY(101,1) NOT NULL,
	[cntname] [varchar](50) NULL,
	[curr] [varchar](50) NULL,
	[currSymbol] [varchar](50) NULL,
	[conversionFactor] [float] NULL,
	[statu] [int] NULL,
	[customerCode] [int] NULL,
	[coins] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[misCoveringLetterDetails]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[misCoveringLetterDetails](
	[slno] [int] IDENTITY(1,1) NOT NULL,
	[typ] [varchar](50) NULL,
	[subjec] [varchar](1000) NULL,
	[body] [varchar](4000) NULL,
	[salutation] [varchar](1000) NULL,
	[img] [varchar](100) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[slno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[misStateMaster]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[misStateMaster](
	[recordId] [int] IDENTITY(101,1) NOT NULL,
	[cntname] [int] NULL,
	[stateName] [varchar](100) NULL,
	[gstStart] [varchar](10) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[misTasks]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[misTasks](
	[taskID] [int] IDENTITY(1,1) NOT NULL,
	[dat] [datetime] NULL,
	[toUsr] [varchar](50) NULL,
	[frmUsr] [varchar](50) NULL,
	[subjec] [varchar](200) NULL,
	[descriptio] [varchar](5000) NULL,
	[requiredBy] [datetime] NULL,
	[priority] [int] NULL,
	[pos] [int] NULL,
	[readDat] [datetime] NULL,
	[clearDat] [datetime] NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[taskID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[partyAddresses]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[partyAddresses](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[addressName] [varchar](50) NULL,
	[addres] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[statu] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_partyAddresses] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[partyCreditDebitNotes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[partyCreditDebitNotes](
	[recordId] [bigint] IDENTITY(1,1) NOT NULL,
	[dat] [datetime] NULL,
	[transactionId] [int] NULL,
	[transactionType] [varchar](50) NULL,
	[amt] [float] NULL,
	[descriptio] [varchar](250) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[seq] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[partyDeaprtmentDetails]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[partyDeaprtmentDetails](
	[recordId] [int] NULL,
	[sno] [int] NULL,
	[department] [varchar](50) NULL,
	[details] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[partyDepartments]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[partyDepartments](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[department] [varchar](50) NULL,
	[departmentDetails] [varchar](100) NULL,
	[statu] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_partyDepartments] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[partyDetails]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[partyDetails](
	[recordId] [int] IDENTITY(1001,1) NOT NULL,
	[partyName] [varchar](100) NULL,
	[partyGroup] [int] NULL,
	[contactPerson] [varchar](100) NULL,
	[contactDesignation] [varchar](100) NULL,
	[contactMobile] [varchar](50) NULL,
	[contactEmail] [varchar](50) NULL,
	[leadTime] [int] NULL,
	[crDaysCheck] [int] NULL,
	[crDay] [int] NULL,
	[crAmtCheck] [int] NULL,
	[crAmt] [float] NULL,
	[restrictMode] [int] NULL,
	[partyType] [varchar](10) NULL,
	[dualType] [int] NULL,
	[eximCheck] [int] NULL,
	[airDestination] [varchar](100) NULL,
	[seaDestination] [varchar](100) NULL,
	[bankForSecurity] [int] NULL,
	[partyCode] [varchar](50) NULL,
	[partyUserName] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[statu] [int] NULL,
	[mainCustomer] [int] NULL,
	[pricelist] [varchar](50) NULL,
	[discountlist] [varchar](50) NULL,
	[partyPwd] [varchar](50) NULL,
	[prefLanguage] [varchar](50) NULL,
	[orderReminder1] [int] NULL,
	[orderReminder2] [int] NULL,
	[orderReminder3] [int] NULL,
	[defaultPurchaseorSaleType] [varchar](50) NULL,
	[paymentReminder1] [int] NULL,
	[paymentReminder2] [int] NULL,
	[paymentReminder3] [int] NULL,
	[defaultPaymentMode] [varchar](50) NULL,
	[kycAcnumber] [varchar](50) NULL,
	[kycAcholder] [varchar](50) NULL,
	[kycAcbank] [varchar](50) NULL,
	[kycAcbranch] [varchar](50) NULL,
	[kycAcifsc] [varchar](50) NULL,
	[employee] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[partyPaymentDetails]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[partyPaymentDetails](
	[lineid] [bigint] IDENTITY(1,1) NOT NULL,
	[transactionId] [int] NULL,
	[transactionType] [varchar](50) NULL,
	[transactionDate] [datetime] NULL,
	[partyId] [int] NULL,
	[partyName] [varchar](100) NULL,
	[totalAmt] [float] NULL,
	[advanceAmt] [float] NULL,
	[creditNote] [float] NULL,
	[otherAmounts] [float] NULL,
	[paymentAmount] [float] NULL,
	[description] [varchar](200) NULL,
	[usrname] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[companyId] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[lineid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[partyPaymentsdet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[partyPaymentsdet](
	[recordId] [bigint] NOT NULL,
	[sno] [int] NOT NULL,
	[billno] [int] NULL,
	[billType] [varchar](50) NULL,
	[paymentAmt] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_partyPaymentsdet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[partyPaymentsuni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[partyPaymentsuni](
	[recordId] [bigint] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[partyId] [int] NULL,
	[baseAmt] [float] NULL,
	[tds] [float] NULL,
	[rebate] [float] NULL,
	[others] [float] NULL,
	[receiptAmt] [float] NULL,
	[modeOfPayment] [varchar](50) NULL,
	[revAccount] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[voucherType] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[partyTransactions]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[partyTransactions](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[transactionId] [int] NULL,
	[transactionType] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[partyId] [int] NULL,
	[partyName] [varchar](100) NULL,
	[transactionAmt] [float] NULL,
	[pendingAmount] [float] NULL,
	[returnAmount] [float] NULL,
	[creditNote] [float] NULL,
	[paymentAmount] [float] NULL,
	[descriptio] [varchar](500) NULL,
	[username] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[onTraId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ppcBatchPlanningEmployeeAssignings]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ppcBatchPlanningEmployeeAssignings](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[employee] [bigint] NOT NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_ppcBatchPlanningEmployeeAssignings] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC,
	[employee] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ppcBatchPlanningProcesses]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ppcBatchPlanningProcesses](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[processId] [int] NULL,
	[fromDate] [datetime] NULL,
	[toDate] [datetime] NULL,
	[qcRequired] [int] NULL,
	[processIncharge] [bigint] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_ppcBatchPlanningProcesses] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ppcBatchPlanningSaleOrders]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ppcBatchPlanningSaleOrders](
	[recordId] [int] NOT NULL,
	[sno] [int] NULL,
	[soid] [int] NOT NULL,
	[lineId] [int] NOT NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_ppcBatchPlanningSaleOrders] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[soid] ASC,
	[lineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ppcBatchPlanningUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ppcBatchPlanningUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[batchNo] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[fromDate] [datetime] NULL,
	[toDate] [datetime] NULL,
	[productionIncharge] [bigint] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[itemId] [int] NULL,
	[qty] [float] NULL,
	[pos] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ppcBatchProcessWiseDetailsDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ppcBatchProcessWiseDetailsDet](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[batchno] [int] NULL,
	[lineId] [int] NULL,
	[jobCardNo] [int] NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ppcBatchProcessWiseDetailsUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ppcBatchProcessWiseDetailsUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[jobCardNo] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[processIncharge] [bigint] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[processId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ppcMassPlanningDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ppcMassPlanningDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[itemId] [int] NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_ppcMassPlanningDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ppcMassPlanningUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ppcMassPlanningUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[fromDate] [datetime] NULL,
	[toDate] [datetime] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ppcProcessesMaster]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ppcProcessesMaster](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[processName] [varchar](100) NULL,
	[qcRequired] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[proItemWiseAttachmentsUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[proItemWiseAttachmentsUni](
	[itemId] [int] NOT NULL,
	[minBatchQty] [float] NULL,
	[maxBatchQty] [float] NULL,
	[umId] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[itemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[proItemWiseDesignations]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[proItemWiseDesignations](
	[slno] [bigint] IDENTITY(1,1) NOT NULL,
	[itemid] [int] NULL,
	[desigId] [int] NULL,
	[manhrs] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[slno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[proItemWiseEquipment]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[proItemWiseEquipment](
	[slno] [bigint] IDENTITY(1,1) NOT NULL,
	[itemid] [int] NULL,
	[equipmentId] [int] NULL,
	[manhrs] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[slno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[proItemWiseIngredients]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[proItemWiseIngredients](
	[itemId] [int] NULL,
	[ingredient] [int] NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[slno] [bigint] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[slno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purEmails]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purEmails](
	[sno] [int] IDENTITY(1,1) NOT NULL,
	[setupCode] [varchar](50) NULL,
	[setupValue] [varchar](100) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseEnquiryDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseEnquiryDet](
	[recordId] [bigint] NOT NULL,
	[sno] [int] NOT NULL,
	[itemId] [int] NULL,
	[itemDescription] [varchar](150) NULL,
	[qty] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[uom] [int] NULL,
 CONSTRAINT [PK_purPurchaseEnquiryDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseEnquiryDet_history]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseEnquiryDet_history](
	[auditId] [bigint] NOT NULL,
	[auditDat] [datetime] NULL,
	[auditType] [int] NULL,
	[sno] [int] NOT NULL,
	[recordId] [bigint] NULL,
	[itemId] [int] NULL,
	[itemDescription] [varchar](150) NULL,
	[qty] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[uom] [int] NULL,
 CONSTRAINT [PK_purPurchaseEnquiryDet_history] PRIMARY KEY CLUSTERED 
(
	[auditId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseEnquiryNotes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseEnquiryNotes](
	[recordId] [bigint] NOT NULL,
	[sno] [int] NOT NULL,
	[note] [varchar](250) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [PK_purPurchaseEnquiryNotes] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseEnquiryNotes_history]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseEnquiryNotes_history](
	[auditId] [bigint] NOT NULL,
	[auditDat] [datetime] NULL,
	[auditType] [int] NULL,
	[sno] [int] NOT NULL,
	[recordId] [bigint] NULL,
	[note] [varchar](250) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [PK_purPurchaseEnquiryNotes_history] PRIMARY KEY CLUSTERED 
(
	[auditId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseEnquiryUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseEnquiryUni](
	[recordId] [bigint] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[apprvedDat] [datetime] NULL,
	[approvedUser] [varchar](50) NULL,
	[validity] [datetime] NULL,
	[reference] [varchar](100) NULL,
	[supid] [int] NULL,
	[supplier] [varchar](100) NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[web] [varchar](50) NULL,
	[pos] [int] NULL,
	[printCount] [int] NULL,
	[mailCount] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseEnquiryUni_history]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseEnquiryUni_history](
	[auditId] [bigint] IDENTITY(1,1) NOT NULL,
	[auditDat] [datetime] NULL,
	[auditType] [int] NULL,
	[recordId] [bigint] NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[apprvedDat] [datetime] NULL,
	[approvedUser] [varchar](50) NULL,
	[validity] [datetime] NULL,
	[reference] [varchar](100) NULL,
	[supid] [int] NULL,
	[supplier] [varchar](100) NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[web] [varchar](50) NULL,
	[pos] [int] NULL,
	[printCount] [int] NULL,
	[mailCount] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[auditId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseOrderDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseOrderDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[itemId] [int] NULL,
	[itemName] [varchar](100) NULL,
	[itemDescription] [varchar](250) NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[rat] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[purRequest] [int] NULL,
	[reqdBy] [datetime] NULL,
 CONSTRAINT [pk_purPurchaseOrderDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseOrderTaxes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseOrderTaxes](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[taxcode] [varchar](50) NULL,
	[taxper] [float] NULL,
	[taxvalue] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_purPurchaseOrderTaxes] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseOrderTerms]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseOrderTerms](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[term] [varchar](200) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_purPurchaseOrderTerms] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseOrderUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseOrderUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[approvedDat] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[approvedUsr] [varchar](50) NULL,
	[purchaseType] [varchar](50) NULL,
	[refQuotationId] [int] NULL,
	[refQuotation] [varchar](50) NULL,
	[validity] [datetime] NULL,
	[reference] [varchar](100) NULL,
	[vendorid] [int] NULL,
	[vendorname] [varchar](100) NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[baseamt] [float] NULL,
	[discount] [float] NULL,
	[taxes] [float] NULL,
	[others] [float] NULL,
	[totalAmt] [float] NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[printCount] [int] NULL,
	[mailCount] [int] NULL,
	[typeOfOrder] [varchar](20) NULL,
	[countryId] [int] NULL,
	[conversionFactor] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseRequestDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseRequestDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[dat] [datetime] NULL,
	[itemId] [int] NULL,
	[itemDescription] [varchar](200) NULL,
	[purpose] [varchar](200) NULL,
	[suggestedSupplier] [int] NULL,
	[qty] [float] NULL,
	[approvedQty] [float] NULL,
	[UM] [int] NULL,
	[reqdBy] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[approvedUsr] [varchar](50) NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[department] [int] NULL,
 CONSTRAINT [pk_purPurchaseRequestDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseRequestDet_History]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseRequestDet_History](
	[auditID] [bigint] NOT NULL,
	[audsno] [int] NOT NULL,
	[auditDat] [datetime] NULL,
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[dat] [datetime] NULL,
	[itemId] [int] NULL,
	[itemDescription] [varchar](200) NULL,
	[purpose] [varchar](200) NULL,
	[suggestedSupplier] [int] NULL,
	[qty] [float] NULL,
	[approvedQty] [float] NULL,
	[UM] [int] NULL,
	[reqdBy] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[approvedUsr] [varchar](50) NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[auditType] [int] NULL,
 CONSTRAINT [pk_purPurchaseRequestDet_History] PRIMARY KEY CLUSTERED 
(
	[auditID] ASC,
	[audsno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseRequestUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseRequestUni](
	[recordId] [int] IDENTITY(101,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[descriptio] [varchar](200) NULL,
	[usr] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[department] [int] NULL,
	[empno] [bigint] NULL,
	[printCount] [int] NULL,
	[statu] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseRequestUni_history]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseRequestUni_history](
	[auditID] [bigint] IDENTITY(1,1) NOT NULL,
	[auditDat] [datetime] NULL,
	[recordId] [int] NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[descriptio] [varchar](200) NULL,
	[usr] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[department] [int] NULL,
	[auditType] [int] NULL,
	[empno] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[auditID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseReturnsDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseReturnsDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[lotno] [int] NOT NULL,
	[itemId] [int] NULL,
	[itemName] [varchar](100) NULL,
	[batchno] [varchar](50) NULL,
	[manudate] [datetime] NULL,
	[expdate] [datetime] NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[rat] [float] NULL,
	[mrp] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_purPurchaseReturnsDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseReturnsUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseReturnsUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[approvedDat] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[approvedUsr] [varchar](50) NULL,
	[transporter] [varchar](100) NULL,
	[refMIR] [int] NULL,
	[vendorid] [int] NULL,
	[vendorname] [varchar](100) NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[baseamt] [float] NULL,
	[discount] [float] NULL,
	[taxes] [float] NULL,
	[others] [float] NULL,
	[totalAmt] [float] NULL,
	[pos] [int] NULL,
	[settlemode] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[currencyConversion] [float] NULL,
	[currencySymbol] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseReturnTaxes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseReturnTaxes](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[taxcode] [varchar](50) NULL,
	[taxper] [float] NULL,
	[taxvalue] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_purPurchaseReturnTaxes] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchasesDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchasesDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[store] [int] NULL,
	[itemId] [int] NULL,
	[itemName] [varchar](100) NULL,
	[batchno] [varchar](50) NULL,
	[manudate] [datetime] NULL,
	[expdate] [datetime] NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[rat] [float] NULL,
	[mrp] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[gin] [varchar](50) NULL,
 CONSTRAINT [pk_purPurchasesDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchasesUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchasesUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[approvedDat] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[approvedUsr] [varchar](50) NULL,
	[invoiceno] [varchar](50) NULL,
	[invoicedat] [datetime] NULL,
	[transporter] [varchar](100) NULL,
	[purchaseType] [varchar](50) NULL,
	[refPOId] [int] NULL,
	[vendorid] [int] NULL,
	[vendorname] [varchar](100) NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[baseamt] [float] NULL,
	[discount] [float] NULL,
	[taxes] [float] NULL,
	[others] [float] NULL,
	[totalAmt] [float] NULL,
	[pos] [int] NULL,
	[settlemode] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[qcCheck] [int] NULL,
	[currencyConversion] [float] NULL,
	[currencySymbol] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purPurchaseTaxes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purPurchaseTaxes](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[taxcode] [varchar](50) NULL,
	[taxper] [float] NULL,
	[taxvalue] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_purPurchaseTaxes] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purpurchasetypes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purpurchasetypes](
	[slno] [int] IDENTITY(1,1) NOT NULL,
	[purtype] [varchar](50) NULL,
	[importType] [int] NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[slno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purQuotationDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purQuotationDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[itemId] [int] NULL,
	[itemName] [varchar](100) NULL,
	[itemDescription] [varchar](250) NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[rat] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[leadDays] [int] NULL,
 CONSTRAINT [pk_purQuotationDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purQuotationDet_history]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purQuotationDet_history](
	[auditId] [int] NULL,
	[lineid] [bigint] IDENTITY(1,1) NOT NULL,
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[itemId] [int] NULL,
	[itemName] [varchar](100) NULL,
	[itemDescription] [varchar](250) NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[rat] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purQuotationTaxes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purQuotationTaxes](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[taxCode] [varchar](50) NULL,
	[taxPer] [float] NULL,
	[taxValue] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_purQuotationTaxes] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purQuotationTaxes_history]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purQuotationTaxes_history](
	[auditId] [int] NULL,
	[lineid] [bigint] IDENTITY(1,1) NOT NULL,
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[taxCode] [varchar](50) NULL,
	[taxPer] [float] NULL,
	[taxValue] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purQuotationTerms]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purQuotationTerms](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[term] [varchar](200) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_purQuotationTerms] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purQuotationTerms_history]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purQuotationTerms_history](
	[auditId] [int] NULL,
	[lineid] [bigint] IDENTITY(1,1) NOT NULL,
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[term] [varchar](200) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lineid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purQuotationUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purQuotationUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[approvedDat] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[approvedUsr] [varchar](50) NULL,
	[purchaseType] [varchar](50) NULL,
	[refQuotationId] [int] NULL,
	[refQuotation] [varchar](50) NULL,
	[validity] [datetime] NULL,
	[reference] [varchar](100) NULL,
	[vendorid] [int] NULL,
	[vendorname] [varchar](100) NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[baseamt] [float] NULL,
	[discount] [float] NULL,
	[taxes] [float] NULL,
	[others] [float] NULL,
	[totalAmt] [float] NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purQuotationUni_history]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purQuotationUni_history](
	[auditId] [int] IDENTITY(1,1) NOT NULL,
	[auditDat] [datetime] NULL,
	[auditUser] [varchar](50) NULL,
	[recordId] [int] NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[approvedDat] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[approvedUsr] [varchar](50) NULL,
	[purchaseType] [varchar](50) NULL,
	[refQuotationId] [int] NULL,
	[refQuotation] [varchar](50) NULL,
	[validity] [datetime] NULL,
	[reference] [varchar](100) NULL,
	[vendorid] [int] NULL,
	[vendorname] [varchar](100) NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[baseamt] [float] NULL,
	[discount] [float] NULL,
	[taxes] [float] NULL,
	[others] [float] NULL,
	[totalAmt] [float] NULL,
	[pos] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[auditId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purSetup]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purSetup](
	[sno] [int] IDENTITY(1,1) NOT NULL,
	[setupCode] [varchar](50) NULL,
	[setupDescription] [varchar](200) NULL,
	[setupValue] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purSupplierGroups]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purSupplierGroups](
	[recordID] [int] IDENTITY(101,1) NOT NULL,
	[mGrp] [varchar](50) NULL,
	[sGrp] [varchar](50) NULL,
	[sno] [int] NULL,
	[chk] [int] NULL,
	[groupCode] [varchar](50) NULL,
	[grpTag] [varchar](50) NULL,
	[statu] [int] NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[purTerms]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[purTerms](
	[slno] [int] IDENTITY(1,1) NOT NULL,
	[term] [varchar](200) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[slno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[qcProcessWiseDetails]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[qcProcessWiseDetails](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[processId] [int] NULL,
	[dat] [datetime] NULL,
	[fromdate] [datetime] NULL,
	[todate] [datetime] NULL,
	[qcIncharge] [bigint] NULL,
	[test] [int] NULL,
	[samplesCollected] [float] NULL,
	[rectified] [float] NULL,
	[rejected] [float] NULL,
	[rectificationValue] [float] NULL,
	[rejectedValue] [float] NULL,
	[descriptio] [varchar](500) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[qcTestings]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[qcTestings](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[testname] [varchar](50) NULL,
	[testArea] [varchar](50) NULL,
	[microCheck] [int] NULL,
	[checkingType] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[qcTraTestsDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[qcTraTestsDet](
	[recordId] [bigint] NOT NULL,
	[sno] [int] NOT NULL,
	[lotno] [int] NULL,
	[lottype] [varchar](50) NULL,
	[comments] [varchar](250) NULL,
	[checkedQty] [float] NULL,
	[rectifiedQty] [float] NULL,
	[rejectedQty] [float] NULL,
	[valueOfItem] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[transactionId] [int] NULL,
	[rectificationCost] [float] NULL,
 CONSTRAINT [pk_qcTraTestsDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[qcTraTestsUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[qcTraTestsUni](
	[recordId] [bigint] IDENTITY(1,1) NOT NULL,
	[dat] [datetime] NULL,
	[testid] [int] NULL,
	[inspectedBy] [bigint] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[seq] [varchar](50) NULL,
	[typ] [varchar](50) NULL,
	[usrname] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[resOutletMaster]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[resOutletMaster](
	[restaCode] [varchar](50) NOT NULL,
	[restaName] [varchar](100) NULL,
	[outlettype] [int] NULL,
	[billingGroup] [int] NOT NULL,
	[autoSettleChck] [int] NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NOT NULL,
 CONSTRAINT [pk_resOutletMaster] PRIMARY KEY CLUSTERED 
(
	[restaCode] ASC,
	[customerCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[salcustomerGroups]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[salcustomerGroups](
	[recordID] [int] IDENTITY(101,1) NOT NULL,
	[mGrp] [varchar](50) NULL,
	[sGrp] [varchar](50) NULL,
	[sno] [int] NULL,
	[chk] [int] NULL,
	[groupCode] [varchar](50) NULL,
	[grpTag] [varchar](50) NULL,
	[statu] [int] NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[salSaleReturnsDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[salSaleReturnsDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[lotno] [int] NOT NULL,
	[itemId] [int] NULL,
	[itemName] [varchar](100) NULL,
	[batchno] [varchar](50) NULL,
	[manudate] [datetime] NULL,
	[expdate] [datetime] NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[rat] [float] NULL,
	[mrp] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_salSaleReturnsDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[salSaleReturnsUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[salSaleReturnsUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[approvedDat] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[approvedUsr] [varchar](50) NULL,
	[transporter] [varchar](100) NULL,
	[refInvoice] [int] NULL,
	[partyId] [int] NULL,
	[partyName] [varchar](100) NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[baseamt] [float] NULL,
	[discount] [float] NULL,
	[taxes] [float] NULL,
	[others] [float] NULL,
	[totalAmt] [float] NULL,
	[pos] [int] NULL,
	[settlemode] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[currencyConversion] [float] NULL,
	[currencySymbol] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[salSaleReturnTaxes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[salSaleReturnTaxes](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[taxcode] [varchar](50) NULL,
	[taxper] [float] NULL,
	[taxvalue] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_salSaleReturnTaxes] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[salSalesDet]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[salSalesDet](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[store] [int] NULL,
	[itemId] [int] NULL,
	[itemName] [varchar](100) NULL,
	[batchno] [varchar](50) NULL,
	[manudate] [datetime] NULL,
	[expdate] [datetime] NULL,
	[warrentyTill] [datetime] NULL,
	[qty] [float] NULL,
	[um] [int] NULL,
	[rat] [float] NULL,
	[mrp] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[refSoid] [int] NULL,
	[refSoLine] [int] NULL,
 CONSTRAINT [pk_salSalesDet] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[salSalesTaxes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[salSalesTaxes](
	[recordId] [int] NOT NULL,
	[sno] [int] NOT NULL,
	[itemId] [int] NULL,
	[taxcode] [varchar](50) NULL,
	[taxper] [float] NULL,
	[taxvalue] [float] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_salSalesTaxes] PRIMARY KEY CLUSTERED 
(
	[recordId] ASC,
	[sno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[salSalesUni]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[salSalesUni](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[approvedDat] [datetime] NULL,
	[usr] [varchar](50) NULL,
	[approvedUsr] [varchar](50) NULL,
	[dcno] [varchar](50) NULL,
	[dcdat] [datetime] NULL,
	[transporter] [varchar](100) NULL,
	[saleType] [varchar](50) NULL,
	[refSOId] [int] NULL,
	[partyId] [int] NULL,
	[partyName] [varchar](100) NULL,
	[addr] [varchar](250) NULL,
	[country] [varchar](50) NULL,
	[stat] [varchar](50) NULL,
	[district] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[zip] [varchar](50) NULL,
	[mobile] [varchar](50) NULL,
	[tel] [varchar](50) NULL,
	[fax] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[webid] [varchar](50) NULL,
	[baseamt] [float] NULL,
	[discount] [float] NULL,
	[taxes] [float] NULL,
	[others] [float] NULL,
	[totalAmt] [float] NULL,
	[pos] [int] NULL,
	[settlemode] [int] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[currencyConversion] [float] NULL,
	[currencySymbol] [varchar](10) NULL,
	[passCodeCheck] [int] NULL,
	[passCode] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[totAdvanceDetails]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[totAdvanceDetails](
	[recordId] [int] IDENTITY(1,1) NOT NULL,
	[seq] [varchar](50) NULL,
	[transactionId] [int] NULL,
	[tratype] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[amt] [float] NULL,
	[paymentmode] [varchar](50) NULL,
	[remarks] [varchar](200) NULL,
	[bankdetails] [varchar](400) NULL,
	[usrName] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[partyId] [int] NULL,
	[accountId] [int] NULL,
	[detail1] [varchar](50) NULL,
	[detail2] [varchar](50) NULL,
	[detail3] [varchar](50) NULL,
	[printCount] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[recordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[totSalesSupportings]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[totSalesSupportings](
	[billNo] [int] NULL,
	[guestName] [varchar](100) NULL,
	[addr] [varchar](300) NULL,
	[mobile] [varchar](50) NULL,
	[amt] [float] NULL,
	[descript] [varchar](200) NULL,
	[bankDetails] [varchar](1000) NULL,
	[accName] [int] NULL,
	[roomCheckinid] [int] NULL,
	[billType] [varchar](50) NULL,
	[settleMode] [varchar](50) NULL,
	[usrname] [varchar](50) NULL,
	[settleDate] [datetime] NULL,
	[branchid] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[slno] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[slno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[transactions_Audit]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[transactions_Audit](
	[slno] [int] IDENTITY(1,1) NOT NULL,
	[traId] [int] NULL,
	[descr] [varchar](500) NULL,
	[usr] [varchar](50) NULL,
	[tratype] [int] NULL,
	[transact] [varchar](50) NULL,
	[traModule] [varchar](50) NULL,
	[syscode] [varchar](2000) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
	[dat] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[slno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[userCompleteProfile]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[userCompleteProfile](
	[usrName] [varchar](500) NOT NULL,
	[userProfileName] [varchar](100) NULL,
	[employeeNo] [bigint] NULL,
	[aboutUser] [varchar](1000) NULL,
	[bannerImage] [varchar](100) NULL,
	[thumbImage] [varchar](100) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NOT NULL,
 CONSTRAINT [PK_userCompleteProfile] PRIMARY KEY CLUSTERED 
(
	[usrName] ASC,
	[customerCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[userPostingAccess]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[userPostingAccess](
	[postingId] [bigint] NOT NULL,
	[dat] [datetime] NULL,
	[userToAccess] [varchar](50) NOT NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
 CONSTRAINT [pk_userPostingAccess] PRIMARY KEY CLUSTERED 
(
	[postingId] ASC,
	[userToAccess] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[userPostings]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[userPostings](
	[postingId] [bigint] IDENTITY(1,1) NOT NULL,
	[dat] [datetime] NULL,
	[postSubject] [varchar](100) NULL,
	[postdetail] [varchar](2000) NULL,
	[postlikes] [int] NULL,
	[postcomments] [int] NULL,
	[postcommentsEnable] [int] NULL,
	[userCode] [varchar](50) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[postingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[userPostingsComments]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[userPostingsComments](
	[commentId] [bigint] IDENTITY(1,1) NOT NULL,
	[postingId] [bigint] NULL,
	[userName] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[comment] [varchar](2000) NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[commentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[userPostingsLikes]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[userPostingsLikes](
	[likeId] [bigint] IDENTITY(1,1) NOT NULL,
	[postingId] [bigint] NULL,
	[userName] [varchar](50) NULL,
	[dat] [datetime] NULL,
	[branchId] [varchar](50) NULL,
	[customerCode] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[likeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usrAut]    Script Date: 12-07-2024 14:37:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usrAut](
	[usrName] [varchar](500) NOT NULL,
	[roleName] [varchar](500) NULL,
	[email] [varchar](500) NULL,
	[pwd] [varchar](500) NULL,
	[pos] [int] NULL,
	[customerCode] [int] NOT NULL,
	[webFreeEnable] [int] NULL,
	[mobileFreeEnable] [int] NULL,
 CONSTRAINT [PK_usrAut] PRIMARY KEY CLUSTERED 
(
	[usrName] ASC,
	[customerCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[crmBillSubmissionsDet]  WITH CHECK ADD FOREIGN KEY([billno])
REFERENCES [dbo].[salSalesUni] ([recordId])
GO
ALTER TABLE [dbo].[crmBillSubmissionsDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[crmBillSubmissionsUni] ([recordId])
GO
ALTER TABLE [dbo].[crmBillSubmissionsUni]  WITH CHECK ADD FOREIGN KEY([customerId])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[crmDiscountListDet]  WITH CHECK ADD FOREIGN KEY([productId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[crmDiscountListDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[crmDiscountListUni] ([recordId])
GO
ALTER TABLE [dbo].[crmPostTeleCalling]  WITH CHECK ADD FOREIGN KEY([customerId])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[crmPostTeleCalling]  WITH CHECK ADD FOREIGN KEY([nextCallId])
REFERENCES [dbo].[crmPostTeleCalling] ([recordId])
GO
ALTER TABLE [dbo].[crmPriceListDet]  WITH CHECK ADD FOREIGN KEY([productId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[crmPriceListDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[crmPriceListUni] ([recordId])
GO
ALTER TABLE [dbo].[crmQuotationDet]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[crmQuotationDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[crmQuotationUni] ([recordId])
GO
ALTER TABLE [dbo].[crmQuotationTaxes]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[crmQuotationUni] ([recordId])
GO
ALTER TABLE [dbo].[crmQuotationTerms]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[crmQuotationUni] ([recordId])
GO
ALTER TABLE [dbo].[crmQuotationUni]  WITH CHECK ADD FOREIGN KEY([partyId])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[crmQuotationUni]  WITH CHECK ADD FOREIGN KEY([refEmployee])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[crmSaleOrderDet]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[crmSaleOrderDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[crmSaleOrderUni] ([recordId])
GO
ALTER TABLE [dbo].[crmSaleOrderTaxes]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[crmSaleOrderUni] ([recordId])
GO
ALTER TABLE [dbo].[crmSaleOrderTerms]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[crmSaleOrderUni] ([recordId])
GO
ALTER TABLE [dbo].[crmSaleOrderUni]  WITH CHECK ADD FOREIGN KEY([partyId])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[crmTargetSettings]  WITH CHECK ADD FOREIGN KEY([categoryId])
REFERENCES [dbo].[invGroups] ([recordId])
GO
ALTER TABLE [dbo].[crmTargetSettings]  WITH CHECK ADD FOREIGN KEY([empno])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[crmTargetSettings]  WITH CHECK ADD FOREIGN KEY([productId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[crmTaxAssigningDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[crmTaxAssigningUni] ([recordId])
GO
ALTER TABLE [dbo].[finAccountsAssign]  WITH CHECK ADD FOREIGN KEY([accname])
REFERENCES [dbo].[finAccounts] ([recordid])
GO
ALTER TABLE [dbo].[finAccountsAssign]  WITH CHECK ADD FOREIGN KEY([accname])
REFERENCES [dbo].[finAccounts] ([recordid])
GO
ALTER TABLE [dbo].[finexecDet]  WITH CHECK ADD FOREIGN KEY([accname])
REFERENCES [dbo].[finAccounts] ([recordid])
GO
ALTER TABLE [dbo].[finexecDet]  WITH CHECK ADD FOREIGN KEY([accname])
REFERENCES [dbo].[finAccounts] ([recordid])
GO
ALTER TABLE [dbo].[finexecDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[finexecUni] ([recordId])
GO
ALTER TABLE [dbo].[finexecDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[finexecUni] ([recordId])
GO
ALTER TABLE [dbo].[finexecUni_history]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[finexecUni] ([recordId])
GO
ALTER TABLE [dbo].[finexecUni_history]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[finexecUni] ([recordId])
GO
ALTER TABLE [dbo].[hrdAllowanceDeductionRanges]  WITH CHECK ADD FOREIGN KEY([allowanceId])
REFERENCES [dbo].[hrdAllowancesDeductions] ([recordId])
GO
ALTER TABLE [dbo].[hrdAllowanceDeductionRanges]  WITH CHECK ADD FOREIGN KEY([allowanceId])
REFERENCES [dbo].[hrdAllowancesDeductions] ([recordId])
GO
ALTER TABLE [dbo].[hrdDesignations]  WITH CHECK ADD FOREIGN KEY([department])
REFERENCES [dbo].[hrdDepartments] ([recordId])
GO
ALTER TABLE [dbo].[hrdDesignations]  WITH CHECK ADD FOREIGN KEY([department])
REFERENCES [dbo].[hrdDepartments] ([recordId])
GO
ALTER TABLE [dbo].[hrdDesignationsAllowances]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdDesignations] ([recordId])
GO
ALTER TABLE [dbo].[hrdDesignationsAllowances]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdDesignations] ([recordId])
GO
ALTER TABLE [dbo].[hrdDesignationsLeaves]  WITH CHECK ADD FOREIGN KEY([leaveId])
REFERENCES [dbo].[hrdLeaves] ([recordId])
GO
ALTER TABLE [dbo].[hrdDesignationsLeaves]  WITH CHECK ADD FOREIGN KEY([leaveId])
REFERENCES [dbo].[hrdLeaves] ([recordId])
GO
ALTER TABLE [dbo].[hrdDesignationsLeaves]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdDesignations] ([recordId])
GO
ALTER TABLE [dbo].[hrdDesignationsLeaves]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdDesignations] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmpInOutDetails]  WITH CHECK ADD FOREIGN KEY([empId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmpInOutDetails]  WITH CHECK ADD FOREIGN KEY([empId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeAllowancesDeductions]  WITH CHECK ADD FOREIGN KEY([allowance])
REFERENCES [dbo].[hrdAllowancesDeductions] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeAllowancesDeductions]  WITH CHECK ADD FOREIGN KEY([allowance])
REFERENCES [dbo].[hrdAllowancesDeductions] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeAllowancesDeductions]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeAllowancesDeductions]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeCurriculum]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeCurriculum]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeExperience]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeExperience]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeFamilyDetails]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeFamilyDetails]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeIdentifications]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeIdentifications]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeLeaves]  WITH CHECK ADD FOREIGN KEY([leaveId])
REFERENCES [dbo].[hrdLeaves] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeLeaves]  WITH CHECK ADD FOREIGN KEY([leaveId])
REFERENCES [dbo].[hrdLeaves] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeLeaves]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployeeLeaves]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployees]  WITH CHECK ADD FOREIGN KEY([department])
REFERENCES [dbo].[hrdDepartments] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployees]  WITH CHECK ADD FOREIGN KEY([department])
REFERENCES [dbo].[hrdDepartments] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployees]  WITH CHECK ADD FOREIGN KEY([designation])
REFERENCES [dbo].[hrdDesignations] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployees]  WITH CHECK ADD FOREIGN KEY([designation])
REFERENCES [dbo].[hrdDesignations] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployees]  WITH CHECK ADD FOREIGN KEY([MGR])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdEmployees]  WITH CHECK ADD FOREIGN KEY([MGR])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdInterviewCandidates]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdInterviewsUni] ([recordId])
GO
ALTER TABLE [dbo].[hrdInterviewCandidates]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdInterviewsUni] ([recordId])
GO
ALTER TABLE [dbo].[hrdInterviewCandidates]  WITH CHECK ADD FOREIGN KEY([refEmpNo])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdInterviewCandidates]  WITH CHECK ADD FOREIGN KEY([refEmpNo])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdInterviewCandidates]  WITH CHECK ADD FOREIGN KEY([resumeId])
REFERENCES [dbo].[hrdResumeUni] ([recordId])
GO
ALTER TABLE [dbo].[hrdInterviewCandidates]  WITH CHECK ADD FOREIGN KEY([resumeId])
REFERENCES [dbo].[hrdResumeUni] ([recordId])
GO
ALTER TABLE [dbo].[hrdInterviewsPanel]  WITH CHECK ADD FOREIGN KEY([empno])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdInterviewsPanel]  WITH CHECK ADD FOREIGN KEY([empno])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[hrdInterviewsPanel]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdInterviewsUni] ([recordId])
GO
ALTER TABLE [dbo].[hrdInterviewsPanel]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdInterviewsUni] ([recordId])
GO
ALTER TABLE [dbo].[hrdInterviewsUni]  WITH CHECK ADD FOREIGN KEY([designation])
REFERENCES [dbo].[hrdDesignations] ([recordId])
GO
ALTER TABLE [dbo].[hrdInterviewsUni]  WITH CHECK ADD FOREIGN KEY([designation])
REFERENCES [dbo].[hrdDesignations] ([recordId])
GO
ALTER TABLE [dbo].[hrdResumeCurriculum]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdResumeUni] ([recordId])
GO
ALTER TABLE [dbo].[hrdResumeCurriculum]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdResumeUni] ([recordId])
GO
ALTER TABLE [dbo].[hrdResumeExperience]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdResumeUni] ([recordId])
GO
ALTER TABLE [dbo].[hrdResumeExperience]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[hrdResumeUni] ([recordId])
GO
ALTER TABLE [dbo].[hrdResumeUni]  WITH CHECK ADD FOREIGN KEY([designation])
REFERENCES [dbo].[hrdDesignations] ([recordId])
GO
ALTER TABLE [dbo].[hrdResumeUni]  WITH CHECK ADD FOREIGN KEY([designation])
REFERENCES [dbo].[hrdDesignations] ([recordId])
GO
ALTER TABLE [dbo].[invMaterialManagement]  WITH CHECK ADD FOREIGN KEY([itemName])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[invMaterialManagement]  WITH CHECK ADD FOREIGN KEY([itemName])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[invMaterials]  WITH CHECK ADD FOREIGN KEY([grp])
REFERENCES [dbo].[invGroups] ([recordId])
GO
ALTER TABLE [dbo].[invMaterials]  WITH CHECK ADD FOREIGN KEY([grp])
REFERENCES [dbo].[invGroups] ([recordId])
GO
ALTER TABLE [dbo].[invMaterialUnits]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[invMaterialUnits]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[invMaterialUnits]  WITH CHECK ADD FOREIGN KEY([um])
REFERENCES [dbo].[invUM] ([recordId])
GO
ALTER TABLE [dbo].[invMaterialUnits]  WITH CHECK ADD FOREIGN KEY([um])
REFERENCES [dbo].[invUM] ([recordId])
GO
ALTER TABLE [dbo].[invTransactionsDet]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[invTransactionsDet]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[invTransactionsDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[invTransactionsUni] ([recordId])
GO
ALTER TABLE [dbo].[invTransactionsDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[invTransactionsUni] ([recordId])
GO
ALTER TABLE [dbo].[maiEquipment]  WITH CHECK ADD FOREIGN KEY([equipmentGroup])
REFERENCES [dbo].[maiEquipGroups] ([recordId])
GO
ALTER TABLE [dbo].[maiEquipment]  WITH CHECK ADD FOREIGN KEY([equipmentGroup])
REFERENCES [dbo].[maiEquipGroups] ([recordId])
GO
ALTER TABLE [dbo].[maiEquipmentInsurances]  WITH CHECK ADD FOREIGN KEY([equipid])
REFERENCES [dbo].[maiEquipment] ([recordId])
GO
ALTER TABLE [dbo].[maiEquipmentInsurances]  WITH CHECK ADD FOREIGN KEY([equipid])
REFERENCES [dbo].[maiEquipment] ([recordId])
GO
ALTER TABLE [dbo].[maiEquipmentInsurances]  WITH CHECK ADD FOREIGN KEY([vendorId])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[maiEquipmentInsurances]  WITH CHECK ADD FOREIGN KEY([vendorId])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[maiEquipmentPMDetails]  WITH CHECK ADD FOREIGN KEY([equipid])
REFERENCES [dbo].[maiEquipment] ([recordId])
GO
ALTER TABLE [dbo].[maiEquipmentPMDetails]  WITH CHECK ADD FOREIGN KEY([equipid])
REFERENCES [dbo].[maiEquipment] ([recordId])
GO
ALTER TABLE [dbo].[misStateMaster]  WITH CHECK ADD FOREIGN KEY([cntname])
REFERENCES [dbo].[misCountryMaster] ([recordId])
GO
ALTER TABLE [dbo].[misStateMaster]  WITH CHECK ADD FOREIGN KEY([cntname])
REFERENCES [dbo].[misCountryMaster] ([recordId])
GO
ALTER TABLE [dbo].[partyAddresses]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[partyAddresses]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[partyDeaprtmentDetails]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[partyDeaprtmentDetails]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[partyDepartments]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[partyDepartments]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[partyDetails]  WITH CHECK ADD FOREIGN KEY([employee])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[partyDetails]  WITH CHECK ADD FOREIGN KEY([employee])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchPlanningEmployeeAssignings]  WITH CHECK ADD FOREIGN KEY([employee])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchPlanningEmployeeAssignings]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[ppcBatchPlanningUni] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchPlanningProcesses]  WITH CHECK ADD FOREIGN KEY([processId])
REFERENCES [dbo].[ppcProcessesMaster] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchPlanningProcesses]  WITH CHECK ADD FOREIGN KEY([processIncharge])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchPlanningProcesses]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[ppcBatchPlanningUni] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchPlanningSaleOrders]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[ppcBatchPlanningUni] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchPlanningSaleOrders]  WITH CHECK ADD FOREIGN KEY([soid])
REFERENCES [dbo].[crmSaleOrderUni] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchPlanningUni]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchPlanningUni]  WITH CHECK ADD FOREIGN KEY([productionIncharge])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchProcessWiseDetailsDet]  WITH CHECK ADD FOREIGN KEY([batchno])
REFERENCES [dbo].[ppcBatchPlanningUni] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchProcessWiseDetailsDet]  WITH CHECK ADD FOREIGN KEY([jobCardNo])
REFERENCES [dbo].[ppcBatchProcessWiseDetailsUni] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchProcessWiseDetailsDet]  WITH CHECK ADD FOREIGN KEY([um])
REFERENCES [dbo].[invUM] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchProcessWiseDetailsUni]  WITH CHECK ADD FOREIGN KEY([processIncharge])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchProcessWiseDetailsUni]  WITH CHECK ADD FOREIGN KEY([processId])
REFERENCES [dbo].[ppcProcessesMaster] ([recordId])
GO
ALTER TABLE [dbo].[ppcBatchProcessWiseDetailsUni]  WITH CHECK ADD FOREIGN KEY([um])
REFERENCES [dbo].[invUM] ([recordId])
GO
ALTER TABLE [dbo].[ppcMassPlanningDet]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[ppcMassPlanningDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[ppcMassPlanningUni] ([recordId])
GO
ALTER TABLE [dbo].[ppcMassPlanningDet]  WITH CHECK ADD FOREIGN KEY([um])
REFERENCES [dbo].[invUM] ([recordId])
GO
ALTER TABLE [dbo].[proItemWiseAttachmentsUni]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[proItemWiseAttachmentsUni]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseEnquiryDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purPurchaseEnquiryUni] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseEnquiryDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purPurchaseEnquiryUni] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseEnquiryDet_history]  WITH CHECK ADD FOREIGN KEY([auditId])
REFERENCES [dbo].[purPurchaseEnquiryUni_history] ([auditId])
GO
ALTER TABLE [dbo].[purPurchaseEnquiryDet_history]  WITH CHECK ADD FOREIGN KEY([auditId])
REFERENCES [dbo].[purPurchaseEnquiryUni_history] ([auditId])
GO
ALTER TABLE [dbo].[purPurchaseEnquiryDet_history]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseEnquiryDet_history]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseEnquiryNotes]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purPurchaseEnquiryUni] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseEnquiryNotes]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purPurchaseEnquiryUni] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseEnquiryNotes_history]  WITH CHECK ADD FOREIGN KEY([auditId])
REFERENCES [dbo].[purPurchaseEnquiryUni_history] ([auditId])
GO
ALTER TABLE [dbo].[purPurchaseEnquiryNotes_history]  WITH CHECK ADD FOREIGN KEY([auditId])
REFERENCES [dbo].[purPurchaseEnquiryUni_history] ([auditId])
GO
ALTER TABLE [dbo].[purPurchaseEnquiryUni_history]  WITH CHECK ADD FOREIGN KEY([supid])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseEnquiryUni_history]  WITH CHECK ADD FOREIGN KEY([supid])
REFERENCES [dbo].[partyDetails] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseOrderDet]  WITH CHECK ADD FOREIGN KEY([purRequest])
REFERENCES [dbo].[purPurchaseRequestUni] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseOrderDet]  WITH CHECK ADD FOREIGN KEY([purRequest])
REFERENCES [dbo].[purPurchaseRequestUni] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseOrderUni]  WITH CHECK ADD FOREIGN KEY([countryId])
REFERENCES [dbo].[misCountryMaster] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseOrderUni]  WITH CHECK ADD FOREIGN KEY([countryId])
REFERENCES [dbo].[misCountryMaster] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseRequestDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purPurchaseRequestUni] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseRequestDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purPurchaseRequestUni] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseRequestUni]  WITH CHECK ADD FOREIGN KEY([department])
REFERENCES [dbo].[invDepartments] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseRequestUni]  WITH CHECK ADD FOREIGN KEY([department])
REFERENCES [dbo].[invDepartments] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseRequestUni]  WITH CHECK ADD FOREIGN KEY([empno])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseRequestUni]  WITH CHECK ADD FOREIGN KEY([empno])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseReturnsDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purPurchaseReturnsUni] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseReturnsDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purPurchaseReturnsUni] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseReturnsUni]  WITH CHECK ADD FOREIGN KEY([refMIR])
REFERENCES [dbo].[purPurchasesUni] ([recordId])
GO
ALTER TABLE [dbo].[purPurchaseReturnsUni]  WITH CHECK ADD FOREIGN KEY([refMIR])
REFERENCES [dbo].[purPurchasesUni] ([recordId])
GO
ALTER TABLE [dbo].[purQuotationDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purQuotationUni] ([recordId])
GO
ALTER TABLE [dbo].[purQuotationDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purQuotationUni] ([recordId])
GO
ALTER TABLE [dbo].[purQuotationDet_history]  WITH CHECK ADD FOREIGN KEY([auditId])
REFERENCES [dbo].[purQuotationUni_history] ([auditId])
GO
ALTER TABLE [dbo].[purQuotationDet_history]  WITH CHECK ADD FOREIGN KEY([auditId])
REFERENCES [dbo].[purQuotationUni_history] ([auditId])
GO
ALTER TABLE [dbo].[purQuotationTaxes]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purQuotationUni] ([recordId])
GO
ALTER TABLE [dbo].[purQuotationTaxes]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purQuotationUni] ([recordId])
GO
ALTER TABLE [dbo].[purQuotationTaxes_history]  WITH CHECK ADD FOREIGN KEY([auditId])
REFERENCES [dbo].[purQuotationUni_history] ([auditId])
GO
ALTER TABLE [dbo].[purQuotationTaxes_history]  WITH CHECK ADD FOREIGN KEY([auditId])
REFERENCES [dbo].[purQuotationUni_history] ([auditId])
GO
ALTER TABLE [dbo].[purQuotationTerms]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purQuotationUni] ([recordId])
GO
ALTER TABLE [dbo].[purQuotationTerms]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[purQuotationUni] ([recordId])
GO
ALTER TABLE [dbo].[purQuotationTerms_history]  WITH CHECK ADD FOREIGN KEY([auditId])
REFERENCES [dbo].[purQuotationUni_history] ([auditId])
GO
ALTER TABLE [dbo].[purQuotationTerms_history]  WITH CHECK ADD FOREIGN KEY([auditId])
REFERENCES [dbo].[purQuotationUni_history] ([auditId])
GO
ALTER TABLE [dbo].[qcProcessWiseDetails]  WITH CHECK ADD FOREIGN KEY([qcIncharge])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[qcTraTestsDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[qcTraTestsUni] ([recordId])
GO
ALTER TABLE [dbo].[qcTraTestsUni]  WITH CHECK ADD FOREIGN KEY([inspectedBy])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[qcTraTestsUni]  WITH CHECK ADD FOREIGN KEY([testid])
REFERENCES [dbo].[qcTestings] ([recordId])
GO
ALTER TABLE [dbo].[salSaleReturnsDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[salSaleReturnsUni] ([recordId])
GO
ALTER TABLE [dbo].[salSaleReturnTaxes]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[salSaleReturnsUni] ([recordId])
GO
ALTER TABLE [dbo].[salSalesDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[salSalesUni] ([recordId])
GO
ALTER TABLE [dbo].[salSalesDet]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[salSalesUni] ([recordId])
GO
ALTER TABLE [dbo].[salSalesDet]  WITH CHECK ADD FOREIGN KEY([refSoid])
REFERENCES [dbo].[crmSaleOrderUni] ([recordId])
GO
ALTER TABLE [dbo].[salSalesTaxes]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[salSalesTaxes]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[invMaterials] ([recordId])
GO
ALTER TABLE [dbo].[salSalesTaxes]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[salSalesUni] ([recordId])
GO
ALTER TABLE [dbo].[salSalesTaxes]  WITH CHECK ADD FOREIGN KEY([recordId])
REFERENCES [dbo].[salSalesUni] ([recordId])
GO
ALTER TABLE [dbo].[userCompleteProfile]  WITH CHECK ADD FOREIGN KEY([employeeNo])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[userCompleteProfile]  WITH CHECK ADD FOREIGN KEY([employeeNo])
REFERENCES [dbo].[hrdEmployees] ([recordId])
GO
ALTER TABLE [dbo].[userPostingAccess]  WITH CHECK ADD FOREIGN KEY([postingId])
REFERENCES [dbo].[userPostings] ([postingId])
GO
ALTER TABLE [dbo].[userPostingAccess]  WITH CHECK ADD FOREIGN KEY([postingId])
REFERENCES [dbo].[userPostings] ([postingId])
GO
ALTER TABLE [dbo].[userPostingsComments]  WITH CHECK ADD FOREIGN KEY([postingId])
REFERENCES [dbo].[userPostings] ([postingId])
GO
ALTER TABLE [dbo].[userPostingsComments]  WITH CHECK ADD FOREIGN KEY([postingId])
REFERENCES [dbo].[userPostings] ([postingId])
GO
ALTER TABLE [dbo].[userPostingsLikes]  WITH CHECK ADD FOREIGN KEY([postingId])
REFERENCES [dbo].[userPostings] ([postingId])
GO
ALTER TABLE [dbo].[userPostingsLikes]  WITH CHECK ADD FOREIGN KEY([postingId])
REFERENCES [dbo].[userPostings] ([postingId])
GO
